
import DrawingComponent from 'universlogique-pg/components/drawing-component';
import Mandelbrot from 'generative/object/mandelbrot';

export default class MandelbrotComponent extends DrawingComponent {
	y = 0;
	step = 3;
	mandelbrot = null;
	constructor(owner, args) {
		super(owner, args);
		this.initComponent("mandelbrot-canvas");
	}
	initComponent(idCanvas) {
		if (super.initComponent(idCanvas) === false) {
			return false
		}
	}
	initRender(idCanvas) {
		super.initRender(idCanvas);

		this.mandelbrot = new Mandelbrot();

		// parameters
		this.mandelbrot.params.method = 4;
		this.mandelbrot.params.drColor = [300, 10, -5, 100, 50, 17, 35];
		this.mandelbrot.params.x1 = -2.1;
		this.mandelbrot.params.x2 = 0.8;
		this.mandelbrot.params.y1 = -1.33;
		this.mandelbrot.params.y2 = 1.33;

		// set colors
		this.mandelbrot.params.setDrColor(this.mandelbrot.params.drColor, this.colorsService);

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
		// height scan
		this.y += 1;

		const pts = this.getPts(this.y);
		if (pts.length > 0) {
			this.canvasService.updateImageData(pts, null, 1);
		}

		if (this.y > this.height) {
			return false;
		}
	}
	getPts(y) {
		let pts = [];

		// width scan
		for (let x = 0; x <= this.width; x += 1) {
			// convert canvas point in mandelbrot plan 
			const pt = this.canvasService.getPointFromPlan([x, y]);
			const mandelbrotPt = this.mandelbrot.getPt(pt[0], pt[1], 0);
			if (mandelbrotPt !== null) {
				// save point
				pts.push(this.canvasService.getPointOnPlan(mandelbrotPt));
			}
		}
		return pts;
	}
}