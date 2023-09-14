
import FractalParameters from 'generative/object/fractal-parameters';
import CComplex from 'universlogique-pg/object/math/CComplex';

export default class Mandelbrot {
	constructor() {
		this.params = new FractalParameters();
		this.c0 = null;
	}
	getPt(x0, y0, z0) {
		const i = (this.params.ifs > 0) ?
			this.getIFSn(x0, y0, z0) :
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
		while (squaresSum < this.params.target && i < this.params.maxIterations);

		return i;
	}

	getIFSn(x0, y0, z0) {
		this.it = 0;

		// start to 0 or current point
		let z = (this.params.ifs === 1) ? new CComplex(0, 0, 0) : new CComplex(x0, y0, z0);

		const c = (this.c0 === null) ? new CComplex(x0, y0, z0) : this.c0;

		// return result
		return this.getIFSi(z, c, 0);
	}
	getIFSi(z, c, n) {
		this.it++;

		if (this.it > this.params.maxIterations || n >= this.params.ifsIterations) {
			// end
			// in : mark 1 or 0
			return this.params.selectMode === 11 ? 1 : 0;
		}

		if (z.squaresSum() > this.params.target) {
			// end by reaching target
			// out : mark 0 or 1
			return this.params.selectMode === 11 ? 0 : 1;
		}

		// recursive call
		return this.getIFSi(this.getZ(z, c, n + 1), c, n + 1) + this.getIFSi(this.getIfsZ(z, c, n + 1), c, n + 1)
	}
	getIfsZ(z, c, i) {
		return z.mulReal(this.params.ifsMultiple);
	}
	getZ(z, c) {
		return z.pow(2).add(c);
	}
	getMandelbrotPt(x, y, z, i) {
		// out
		if (this.params.out === true && i < this.params.maxIterations && i >= this.params.minIterations) {
			return [x, y, z, this.params.getDrColor(i), i];
		}
		return null;
	}
}