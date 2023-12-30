
import FractalParameters from 'generative/object/fractal-parameters';
import CComplex from 'universlogique-pg/object/math/CComplex';

export default class MandelbrotBase {
	constructor() {
		this.params = new FractalParameters();
		this.c0 = null;
		this.currentFunction = null;
		this.ifsFunction = null;
	}
	getPt(x0, y0, z0) {
		const i = (this.params.ifsParams.mode > 0) ?
			// ifs algo
			this.getIFSn(x0, y0, z0) :
			// classic algo by default
			this.getI(x0, y0, z0);

		return this.getMandelbrotPt(x0, y0, z0, i);
	}
	getI(x0, y0, z0) {
		// classic mandelbrot : set j from start point
		// else julia set
		const c = (this.c0 === null) ? new CComplex(x0, y0, z0) : this.c0;

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
		while (squaresSum < this.params.target && i < this.params.iterations);

		return i;
	}
	getIFSn(x0, y0, z0) {
		this.it = 0;

		// start to 0 or current point
		let z = (this.params.ifsParams.mode === 1) ? new CComplex(0, 0, 0) : new CComplex(x0, y0, z0);

		const c = (this.c0 === null) ? new CComplex(x0, y0, z0) : this.c0;

		// return result
		return this.getIFSi(z, c, 0);
	}
	getIFSi(z, c, n) {
		this.it++;

		if (this.it > this.params.iterations || n >= this.params.ifsParams.iterations) {
			// end
			// in : mark 0
			return 0;
		}

		if (z.squaresSum() > this.params.target) {
			// end by reaching target
			// out : 1
			return 1;
		}

		// recursive call
		return this.getIFSi(this.getZ(z, c, n + 1), c, n + 1) + this.getIFSi(this.getIfsZ(z, c, n + 1), c, n + 1)
	}
	getIfsZ(z) {
		return z.mul(new CComplex(2, 0));
	}
	getZ(z, c) {
		return z.pow(2).add(c);
	}
	getMandelbrotPt(x, y, z, i) {
		// out
		if (this.params.out === true && i < this.params.iterations && i >= this.params.minIterations) {
			return [x, y, z, this.params.getDrColor(i), i];
		}
		return null;
	}
}