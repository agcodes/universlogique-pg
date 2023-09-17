
import FractalParameters from 'generative/object/fractal-parameters';
import CComplex from 'universlogique-pg/object/math/CComplex';

export default class Mandelbrot {
	constructor() {
		this.params = new FractalParameters();
	}
	init() {
		
	}
	getPt(x0, y0, z0) {
		const i = (this.params.ifsParams) ?
			this.getIFSn(x0, y0, z0) :
			this.getI(x0, y0, z0);

		return this.getMandelbrotPt(x0, y0, z0, i);
	}
	getI(x0, y0, z0) {
		// classic mandelbrot : set j from start point
		// else julia set
		const c = (this.params.c0 === null) ? new CComplex(x0, y0, z0) : this.params.c0;

		// new z
		let z = new CComplex(x0, y0, z0);

		let i = 0;
		let squaresSum = 0;
		do {
			z = this.getZ(z, c);
			if (z === null) {
				break;
			}
			squaresSum = z.squaresSum();
			i++;
		}
		while (squaresSum < this.params.target && i < this.params.maxIterations);

		return i;
	}
	getIFSn(x0, y0, z0) {
		this.it = 0;

		// start to 0 or current point
		let z = (this.params.ifs === 1) ? new CComplex(0, 0, 0) : new CComplex(x0, y0, z0);

		const c = (this.params.ifsParams.c0 === null) ? new CComplex(x0, y0, z0) : this.params.ifsParams.c0;

		// return result
		return this.getIFSi(z, c, 0);
	}
	getIFSi(z, c, n) {
		this.it++;

		if (this.it > this.params.maxIterations || n >= this.params.ifsParams.maxIterations) {
			// end
			// in : mark 1 or 0
			return 0;
		}

		if (z.squaresSum() > this.params.target) {
			// end by reaching target
			// out : mark 0 or 1
			return 1;
		}

		// recursive call
		return this.getIFSi(this.getZ(z, c, n + 1), c, n + 1) + this.getIFSi(this.getIfsZ(z, c, n + 1), c, n + 1)
	}
	getIfsZ(z, c) {
		// execute defined function (ex : z.mul(c(2,0));
		return this.params.ifsParams.currentFunction(z, this.params.ifsParams.base, c, this.params.ifsParams.f, this.params.ifsParams.args);
	}
	getZ(z, c) {
		// execute defined function (ex for classic mandelbrot f1 : z.pow(2).add(c))
		return this.params.currentFunction(z, this.params.base, c, this.params.f, this.params.args);
	}
	getMandelbrotPt(x, y, z, i) {
		// out
		if (this.params.out === true && i < this.params.maxIterations && i >= this.params.minIterations) {
			// return pt with color
			return [x, y, z, this.params.getDrColor(i), i];
		}
		return null;
	}
}