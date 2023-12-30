import FractalParameters from './fractal-parameters';
import MandelbrotFunctions from './mandelbrot-functions';

export default class MandelbrotParameters extends FractalParameters {
	setFunctions() {
		const mandelbrotFunctions = new MandelbrotFunctions();
		this.currentFunction = mandelbrotFunctions.getFunction(this.type);
		this.functionDefinition = mandelbrotFunctions.getFunctionDefinition(this.type, this.f, this.base, this.args, this.c0);
	}
	getNew() {
		return new MandelbrotParameters();
	}
}