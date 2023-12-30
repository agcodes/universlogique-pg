import CComplex from 'universlogique-pg/object/math/CComplex';
import NewtonFractalParameters from './newton-fractal-parameters';
import Fractal from './fractal';

export default class NewtonFractal extends Fractal {
	constructor() {
		super();
		this.params = new NewtonFractalParameters();
		this.c2 = null;

		this.iterations = 0;
		this.eps = 0;

		this.cDerivative = null;

		this.iFunction = null;
		this.iDerivativeFunction = null;
	}
	setParameters(mandelbrotParams) {
		this.params = mandelbrotParams;
	}
	initialize(colorsService_) {
		this.colorsService = colorsService_;

		// step size for numerical derivative
		const dh = 0.00001;
		this.cDerivative = new CComplex(dh, dh);

		// max error allowed
		this.eps = 0.01;

		this.c2 = new CComplex(2, 0);
	}
	getPt(x, y) {
		const i = (this.params.ifsParams && this.params.ifsParams.mode > 0) ?
			this.getIFSn(x, y, null) :
			this.getI(x, y);
		if (i === null) {
			return null;
		}

		const v = this.getV(this.params.method, i, x, y);

		let vIn0 = v;
		let vIn1 = v;
		let vIn2 = v;
		let vIn3 = v;

		if (this.params.out === true && i < this.params.iterations && i >= this.params.minIterations) {
			return [x, y, 0, this.params.getDrColor(i)];
		}

		if (this.params.inner === true && i === this.params.iterations) {
			if (this.params.innerMethod > 0) {
				vIn0 = this.getV(this.params.innerMethod, i, x, y);
				vIn1 = vIn0;
				vIn2 = vIn0;
				vIn3 = vIn0;
			}
			return [x, y, 0, this.params.getInnerColor(v, vIn0, vIn1, vIn2, vIn3, false), i, v];
		}
		return null;
	}
	getI(x0, y0, z0) {
		// Newton iteration
		let z = this.params.zFromOrigin ? new CComplex(0, 0) : new CComplex(x0, y0, z0);
		const c = this.params.c0 === null ? new CComplex(x0, y0, z0) : this.params.c0;

		let limit = 0;
		let i = 0;

		do {
			const z0 = this.getNewZ(z, c);
			if (z0 === null) {
				break;
			}
			limit = Math.abs(z0.sub(z).a);
			z = z0;
			i++;
		}
		while (limit > this.eps && i < this.params.iterations);

		this.saveZResults(z);
		return i;
	}
	getNewZ(z, c) {
		if ((this.params.iDerivativeFunction === null)) {
			const fz = this.fZ(z, c, this.params.base);
			// derivative approximation
			// z - f(z)/(f(z+0.01)-f(z)/0.01)
			return z.sub(
				fz.div(this.fZ(z.add(this.cDerivative), c, this.params.base).sub(fz).div(this.cDerivative))
			);
		}

		// real derivative
		// z - f(z)/f'(z)
		return z.sub((this.fZ(z, c, this.params.base)).div(this.derivativefZ(z, c, this.params.base)));
	}
	fZ(z, c, m) {
		if (this.params.currentFunction) return this.params.currentFunction(z, m, this.params.f, c, this.c2, this.params.args);
		return z;
	}
	derivativefZ(z, c, m) {
		if (this.params.iDerivativeFunction) return this.params.iDerivativeFunction(z, m, c);
		return z;
	}
	getIFSn(x0, y0, z0) {
		this.it = 0;
		// start to 0 or current point
		const z = this.params.zFromOrigin ? new CComplex(0, 0, 0) : new CComplex(x0, y0, z0);
		const c = this.params.c0 === null ? new CComplex(x0, y0, z0) : this.params.c0;

		// return result
		return this.getIFSi(z, this.getNewZ(z, c, false), c, 0);
	}
	getIFSi(z, z1, c, n) {
		this.it++;
		if (this.it >= this.params.iterations || n >= this.params.ifsParams.iterations) {
			// iterations limit
			this.saveZResults(z);
			// in : mark 1 or 0
			return 0;
		}

		if ((Math.abs(z1.sub(z).a)) < this.eps) {
			// end by reaching target
			this.saveZResults(z);
			// out : mark 0 or 1
			return 1;
		}

		// recursive call
		return this.getIFSi(z1, this.getNewZ(z, c), c, n + 1) + this.getIFSi(z1, this.getIfsZ(z, c), c, n + 1)
	}
	getIfsZ(z, c) {
		const fz = this.fZ_ifs(z, c);
		if (this.params.ifsParams.mode == 3) {
			// z - f(z)/(f(z+0.01)-f(z)/0.01)
			return z.sub(
				fz.div(this.fZ_ifs(z.add(this.cDerivative), c, this.params.base).sub(fz).div(this.cDerivative))
			);
		}
		else if (this.params.ifsParams.currentFunction) {
			return fz;
		}
	}
	fZ_ifs(z, c) {
		return this.params.ifsParams.currentFunction(
			z,
			this.params.ifsParams.base,
			this.params.ifsParams.f,
			this.params.ifsParams.c0 !== null ? this.params.ifsParams.c0 : c,
			this.c2,
			this.params.ifsParams.args
		)
	}
}
