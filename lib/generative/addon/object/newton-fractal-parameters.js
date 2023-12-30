import FractalParameters from './fractal-parameters';
import NewtonFractalFunctions from './newton-fractal-functions';

export default class NewtonFractalParameters extends FractalParameters {
	setFunctions() {
		

		const newtonFractalFunctions = new NewtonFractalFunctions();
		this.currentFunction = newtonFractalFunctions.getFunction(this.type);
		if (this.f === '') {
			this.iDerivativeFunction = newtonFractalFunctions.getDerivativeFunction(this.type);
		}
		this.functionDefinition = newtonFractalFunctions.getFunctionDefinition(this.type, this.f, this.base, this.args, this.c0);
		console.log(this.functionDefinition);
	}
	getDerivativeFunction() {
		const newtonFractalFunctions = new NewtonFractalFunctions();
		this.currentFunction = newtonFractalFunctions.getDerivativeFunction(this.type);
	}
	getNew() {
		return new NewtonFractalParameters();
	}
}