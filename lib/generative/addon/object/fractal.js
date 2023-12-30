export default class Fractal {
	constructor() {
		this.magnitude = 0;
		this.argument = 0;
		this.squaresSum = 0;
		this.lastPoint = null;
		this.colorsService = null;
	}
	saveZResults(z) {
		this.magnitude = 0;
		if (z) {
			this.magnitude = (this.params.innerMethod === 11 || this.params.method === 11 || this.params.method === 13 || this.params.method === 25 || this.params.method === 33) ? z.getMagnitude() : 0;
			this.squaresSum = z.squaresSum();
			this.argument = (this.params.method === 12 || this.params.method === 17 || this.params.method === 21) ? z.getArgument() : 0;
			this.lastPoint = {a: z.a, b: z.b};
		}
	}
	getV(method, i, x, y) {
		switch (method) {
			case 11:
				return this.magnitude;
			case 12:
				return this.argument;
			case 13:
				return this.magnitude;
			case 14:
				return this.squaresSum;
			case 17:
				return this.argument * this.squaresSum;
			case 19:
				return Math.floor(Math.random() * i);
			case 20:
				return Math.abs(Math.sin(this.squaresSum * Math.PI));
			case 21:
				return Math.log(this.argument);
			case 22:
				return Math.log(this.squaresSum);
			case 25:
				return this.lastPoint.b / 2 / Math.PI - 0.09;
			case 26:
				return this.colorsService.lerpForPoint(x, y + i / 10, 0.1);
			case 27:
				return this.colorsService.lerpForPoint(x + this.squaresSum * 2, y + this.squaresSum * 2, 0.1);
			default:
				return i;
		}
	}
}