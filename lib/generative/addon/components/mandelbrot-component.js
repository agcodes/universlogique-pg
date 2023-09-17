
import DrawingComponent from 'universlogique-pg/components/drawing-component';
import Mandelbrot from 'generative/object/mandelbrot';

export default class MandelbrotComponent extends DrawingComponent {
	y = 0;
	step = 3;
	mandelbrot = null;
	constructor(owner, args) {
		super(owner, args);
		this.initMandelbrot();
		this.initComponent("mandelbrot-canvas");
	}
	initComponent(idCanvas) {
		if (super.initComponent(idCanvas) === false) {
			return false
		}
	}
	initMandelbrot() {
		this.mandelbrot = new Mandelbrot();

		// set parameters (see public/mandelbrot/data)
		this.mandelbrot.params.setParameters(this.inputData);

		this.mandelbrot.params.setDrColor(this.mandelbrot.params.drColor, this.colorsService);
	}
	initRender(idCanvas) {
		super.initRender(idCanvas);

		this.y = 0;

		// def grid with limits
		this.canvasService.defGrid([
			[this.mandelbrot.params.x2, this.mandelbrot.params.y2],
			[this.mandelbrot.params.x1, this.mandelbrot.params.y1]
		], this.width, this.height
		)

		this.canvasService.addBackgroundInImageData([0, 0, 0]);
		this.canvasService.putImageData(0, 0, this.width, this.height);
		this.addMainAnimation(() => this.draw(), 50);
		this.startComponentAnimation();
	}
	draw() {
		// y scan
		this.y += 1;

		const pts = this.getPts(this.y);
		if (pts.length > 0) {
			// update canvas with points
			this.canvasService.updateImageData(pts, null, 1);
		}

		if (this.y > this.height) {
			// reach bottom, stop animation
			return false;
		}
	}
	getPts(y) {
		let pts = [];

		// x scan
		for (let x = 0; x <= this.width; x += 1) {
			// convert canvas point in mandelbrot plan 
			const pt = this.canvasService.getPointFromPlan([x, y]);

			// z not defined here
			const mandelbrotPt = this.mandelbrot.getPt(pt[0], pt[1], 0);
			if (mandelbrotPt !== null) {
				// save point
				pts.push(this.canvasService.getPointOnPlan(mandelbrotPt));
			}
		}
		return pts;
	}
}