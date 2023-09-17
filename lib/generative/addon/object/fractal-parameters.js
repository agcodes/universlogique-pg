
import MandelbrotFunctions from 'generative/object/mandelbrot-functions';
import CComplex from 'universlogique-pg/object/math/CComplex';

export default class FractalParameters {
	pageID = "";
	target = 4;
	base = 2;
	type = "f1";
	func = "";
	maxIterations = 50;
	minIterations = 0;
	r = 2.5;
	x1 = -2.5;
	y1 = -2.5;
	x2 = 2.5;
	y2 = 2.5;
	a = null;
	b = null;
	c = null;
	args = null;
	min = 0;
	method = 1;
	inner = false;
	out = true;
	z0 = 0;
	drColor = null;
	innerColor = null;
	bgColor = null;
	varInterval = null;
	innerMethod = 0;
	fixedInnerColor = null;
	noise = null;
	colorsI = null;
	itInterval = null;
	dW = false;
	ifsParams = null;
	zMethod = 0;
	colorsService = null;
	c0 = null;
	mode = 0;
	constructor() {
		this.c0 = null;
		this.ifsParams = null;
	}
	setParameters(data){
		this.pageID = data.id;
		this.method = data.method;
		this.drColor = data.drColor;
		this.maxIterations = data.maxIterations;
		this.x1 = data.x1;
		this.x2 = data.x2;
		this.y1 = data.y1;
		this.y2 = data.y2;
		this.a = data.a;
		this.b = data.b; 
		this.mode = data.mode;
		this.type = data.type;
		this.args = data.args;
		
		const mandelbrotFunctions = new MandelbrotFunctions();

		this.setC0();
		
		// function
		this.currentFunction = mandelbrotFunctions.getFunction(this.type);
		this.functionDefinition = mandelbrotFunctions.getFunctionDefinition(this.type, this.func, this.base, this.args);

		// IFS (optional)
		if (data.ifsParams) {
			this.ifsParams = new FractalParameters();
			this.ifsParams.setParameters(data.ifsParams);
		}
	}

	setC0() {
		if (typeof this.a !== "undefined" && this.a !== null) {
			this.c0 = new CComplex(this.a, this.b, this.c);
		} else {
			this.c0 = null;
		}
	}
	setDrColor(c, colorsService) {
		this.colorsService = colorsService;
		this.drColor = c;
		if (this.drColor === null) {
			this.drColor = [0, 0, 0];
		}

		this.colorsI = [];
		
		// prepare colors
		for (let i = 0; i <= this.maxIterations + 10; i++) {
			const v = this.getIColorValue(i);
			this.colorsI.push(colorsService.hslToRgb([
				this.drColor[0] + v * this.drColor[4],
				this.drColor[1] + v * this.drColor[5],
				this.drColor[2] + v * this.drColor[6],
				this.drColor.length >= 8 ? this.drColor[3] + v * this.drColor[7] : null
			]));
		}
		return null;
	}
	setInnerColor(c2, colorsService) {
		this.innerColor = c2;
		if (this.innerMethod == 0) {
			if ([1, 2, 3, 4, 5].includes(this.method)) {
				const v = this.getIColorValue(this.maxIterations);
				this.fixedInnerColor = this.getInnerColor(v, v, v, v, v, true);
			}
			else {
				this.fixedInnerColor = colorsService.hslToRgb(this.innerColor);
			}
		}
	}
	getDrColor(i) {
		if (this.colorsI.length === 0) {
			return this.colorsService.hslToRgb([
				this.drColor[0] + i * this.drColor[4],
				this.drColor[1] + i * this.drColor[5],
				this.drColor[2] + i * this.drColor[6]
			]);
		} else {
			return this.colorsI[i];
		}
	}
	getIColorValue(i) {
		switch (this.method) {
			case 1:
				return i;
			case 2:
				return i === 0 ? 0 : Math.log(i);
			case 3:
				return 1 / i * 100;
			case 4:
				return i === 0 ? 0 : Math.sin(Math.log(i)) + 1;
			case 5:
				return i % 2 === 0 ? 0 : 10;
			default:
				return -1;
		}
	}
}