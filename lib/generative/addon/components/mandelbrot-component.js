
import DrawingComponent from 'universlogique-pg/components/drawing-component';
import Mandelbrot from 'generative/object/mandelbrot';

export default class MandelbrotComponent extends DrawingComponent {
	y = 0;
	width = 500;
	height = 500;
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
		this.mandelbrot.params.method = 1;
		this.mandelbrot.params.drColor = [210, 50, 50, 100, 0, 0, 3];
		this.mandelbrot.params.setDrColor(this.mandelbrot.params.drColor, this.colorsService);

		this.y = this.mandelbrot.params.y1;

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
		this.y += 0.01;

		const pts = this.getPts(this.y);

		if (pts.length > 0) {
			this.canvasService.updateImageData(pts, null, 1);
		}

		if (this.y > this.mandelbrot.params.y2) {
			return false;
		}
	}
	getPts(y) {
		let pts = [];
		for (let x = this.mandelbrot.params.x1; x <= this.mandelbrot.params.x2; x += 0.01) {
			const pt = this.mandelbrot.getPt(x, y, 0);
			if (pt !== null) {
				pts.push(this.canvasService.getPointOnPlan(pt));
			}
		}
		return pts;
	}
}