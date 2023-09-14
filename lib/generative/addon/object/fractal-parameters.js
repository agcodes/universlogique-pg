export default class FractalParameters {
	pageID = "";
	a = null;
	b = null;
	c = null;
	args = null;
	min = 0;
	maxIterations = 50;
	minIterations = 0;
	type = "";
	func = "";
	base = 2;
	method = 1;
	inner = false;
	out = true;
	r = 2.5;
	z0 = 0;
	x1 = -2.5;
	y1 = -2.5;
	x2 = 2.5;
	y2 = 2.5;
	step = 0.01;
	drColor = null;
	innerColor = null;
	bgColor = null;
	varInterval = null;
	innerMethod = 0;
	fixedInnerColor = null;
	noise = null;
	varArgs = null;
	varNb = 0;
	varNoise = null;
	d3 = 0;
	colorsI = null;
	target = 4;
	itInterval = null;
	dW = false;
	ifs = 2;
	ifsIterations = 25;
	ifsMultiple = 2;
	ifsParams = null;
	zMethod = 0;
	colorsService = null;
	setDrColor(c, colorsService) {
		this.colorsService = colorsService;
		this.drColor = c;
		if (this.drColor === null) {
			this.drColor = [0, 0, 0];
		}

		this.colorsI = [];
		this.fixedDrColor = colorsService.hslToRgb(this.drColor);
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

		if (typeof this.innerColor[4] !== "number") {
			this.innerColor[4] = 0;
		}
		if (typeof this.innerColor[5] !== "number") {
			this.innerColor[5] = 0;
		}
		if (typeof this.innerColor[6] !== "number") {
			this.innerColor[6] = 0;
		}

		if (this.innerMethod == 0) {
			if ([1, 10, 2, 3, 4, 18].includes(this.method)) {
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
			return (i === 0) ? this.fixedDrColor : this.colorsService.hslToRgb([
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
			case 18:
				return i % 2 === 0 ? 0 : 10;
			case 29:
				return Math.sin(Math.log(i)) + 1;
			default:
				return -1;
		}
	}
}