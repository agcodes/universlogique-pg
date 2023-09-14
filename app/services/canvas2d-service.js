
import CanvasData32 from '../object/canvas/canvas-data-32';

export default class Canvas2dService {
	canvasData = null;
	imageData = null;
	offSet = null;
	limitWidth = 0;
	limitHeight = 0;
	centerAbs = true;
	margin = null;
	grad = null;
	ptMin = null;
	ptMax = null;
	setContext(idCanvas) {
		this.canvasElement = document.getElementById(idCanvas);
		this.context = null;
		this.offSet = [0, 0, 0];
		if (this.canvasElement) {
			this.context = this.canvasElement.getContext('2d');
			return (!this.context);
		}
	}
	initialize() {
		this.ptMax = [this.width, this.height, 0];
		this.ptMin = [0, 0, 0];
		this.margin = [0, 0, 0];
		this.offSet = [0, 0, 0];
		this.grad = [1, 1, 1];
		this.paramsDefined = false;
		this.signedCoord = false;
	}
	setCanvasData(w, h, x, y) {
		this.width = w;
		this.height = h;
		this.limitWidth = w;
		this.limitHeight = h;
		this.imagedata = this.context.createImageData(w, h);
		this.canvasData = new CanvasData32();
		this.canvasData.initialize(this.imagedata, w, h, [x, y]);

		this.canvasData.getImageData(this.imagedata);
	}
	addBackgroundInImageData(color) {
		if (color === null) {
			return false;
		}
		return this.canvasData.addBackgroundInImageData(color);
	}
	addPointsInData(pts, color, size) {
		if (pts === null || pts.length === 0) {
			return false;
		}
		if (this.canvasData === null) {
			return false;
		}
		if (typeof size === "undefined") {
			size = 1;
		}
		return this.canvasData.addPointsInData(pts, color, size);
	}
	updateImageData(pts, color, size) {
		if (pts === null) {
			return false;
		}
		if (this.canvasData === null) {
			return false;
		}
		this.canvasData.addPointsInData(pts, color, size);
		return this.putImageData(0, 0);
	}
	putImageData(x0, y0, w, h) {
		this.canvasData.getImageData(this.imagedata);
		if (x0 > this.imagedata.width) {
			return false;
		}
		if (y0 > this.imagedata.height) {
			return false;
		}

		if (typeof w !== "number") {
			this.context.putImageData(this.imagedata, x0, y0);
		} else {
			if ((w - x0) > this.imagedata.width) {
				w = this.imagedata.width - x0;
			}

			if ((h - y0) > this.imagedata.height) {
				h = this.imagedata.height - y0;
			}
			this.context.putImageData(this.imagedata, x0, y0, x0, y0, w, h);
		}
		return true;
	}

	defGrid(pts, w, h, coefMargin) {
		if (coefMargin === null || typeof coefMargin !== "object") {
			coefMargin = [0, 0, 0];
		}
		let is3D = false;
		this.initialize();
		if (pts === null || typeof pts !== "object") {
			return false;
		}
		if (pts.length === 0) {
			return false;
		}

		this.ptMax = this.getMaxOfPts(pts, this.signedCoord);

		this.ptMin = this.getMinOfPts(pts);

		// X
		this.margin[0] = Math.round(w * coefMargin[0]);
		if ((this.ptMax[0] - this.ptMin[0]) !== 0) {
			this.grad[0] = (w - this.margin[0] * 2) / (this.ptMax[0] - this.ptMin[0]);
		}

		// Y
		this.margin[1] = Math.round(h * coefMargin[1]);
		if ((this.ptMax[1] - this.ptMin[1]) !== 0) {
			this.grad[1] = (h - (this.margin[1] * 2)) / (this.ptMax[1] - this.ptMin[1]);
		}

		// Z
		this.margin[2] = Math.round(h * coefMargin[2]);
		if (is3D && (this.ptMax[2] - this.ptMin[2]) !== 0) {
			this.grad[2] = (h - (this.margin[2] * 2)) / (this.ptMax[2] - this.ptMin[2]);
		}

		this.paramsDefined = true;
		return true;
	}

	getMinOfPts(pts) {
		let ptMin = [0, 0, 0];

		for (let i = 0, n = pts.length; i < n; i++) {
			if (this.isSet(pts[i])) {
				for (let index = 0; index < 3; index++) {
					if (this.isSet(pts[i][index]) && (i === 0 || pts[i][index] < ptMin[index]) && isFinite(pts[i][index])) {
						ptMin[index] = pts[i][index];
					}
				}
			}
		}
		return ptMin;
	}
	getMaxOfPts(pts, abs) {
		let ptMax = [0, 0, 0, null];
		if (abs === false) {
			for (let i = 0, n = pts.length; i < n; i++) {
				if (this.isSet(pts[i])) {
					for (let index = 0; index < 3; index++) {
						if (this.isSet(pts[i][index]) && isFinite(pts[i][index]) && (i === 0 || pts[i][index] > ptMax[index])) {
							ptMax[index] = pts[i][index];
						}
					}
				}
			}
		} else {
			for (let i = 0, n = pts.length; i < n; i++) {
				if (this.isSet(pts[i])) {
					for (let index = 0; index < 3; index++) {
						if (this.isSet(pts[i][index]) && isFinite(pts[i][index]) && (i === 0 || Math.abs(pts[i][index]) > ptMax[index])) {
							ptMax[index] = Math.abs(pts[i][index]);
						}
					}
				}
			}
		}

		return ptMax;
	}
	getPointFromPlan(pt, withLimit, decimals) {
		if (typeof decimals !== "number") {
			decimals = 6;
		}

		if (this.isSet(pt) === false) {
			return pt;
		}

		if (withLimit) {
			pt[0] -= this.limitX0;
		}

		if (this.grad[0] === 0 && this.grad[1] === 0) {
			return pt;
		}

		const xC = (this.centerAbs) ?
			(pt[0] - (this.limitWidth - this.limitHeight) / 2 - this.margin[0] + this.ptMin[0] * this.grad[0]) / this.grad[0] - this.offSet[1] * this.grad[1] :
			(pt[0] - this.margin[0] + this.ptMin[0] * this.grad[0]) / this.grad[0] - this.offSet[1] * this.grad[1];


		const yC = (pt[1] - this.margin[1] + this.ptMin[1] * this.grad[1]) / this.grad[1] - this.offSet[0] * this.grad[0];

		const d = Math.pow(10, decimals);
		return [Math.round(xC * d) / d, Math.round(yC * d) / d, 0, (typeof pt[3] !== 'undefined') ? pt[3] : null];
	}
	getPointOnPlan(pt) {
		let xC = 0;
		let yC = 0;
		let zC = 0;
		let color = null;
		if (this.isSet(pt) === false) {
			return pt;
		}

		if (typeof pt[3] === "object") {
			color = pt[3];
		}

		if (this.grad[0] === 0 && this.grad[1] === 0) {
			return pt;
		}

		xC = (pt[0] - this.ptMin[0]) * this.grad[0] + this.margin[0];
		yC = (pt[1] - this.ptMin[1]) * this.grad[1] + this.margin[1];
		zC = 0;
		if (typeof pt[4] !== 'undefined') {
			return [Math.round(xC + this.offSet[0] * this.grad[0]), Math.round(yC + this.offSet[1] * this.grad[1]), zC, color, pt[4]];
		}
		return [Math.round(xC + this.offSet[0] * this.grad[0]), Math.round(yC + this.offSet[1] * this.grad[1]), zC, color];
	}

	isSet(v) {
		return (typeof v !== 'undefined' && v !== null);
	}
}
