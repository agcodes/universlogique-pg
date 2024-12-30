
import DrawingComponent from 'universlogique-pg/components/drawing-component';
import NewtonFractal from 'generative/object/newton-fractal';

export default class NewtonFractalComponent extends DrawingComponent {
	y = 0;
	step= 0.5;
	fractal = null;
	constructor(owner, args) {
		super(owner, args);
		this.initFractal();
		this.initComponent("component-canvas");
	}
	initComponent(idCanvas) {
		if (super.initComponent(idCanvas) === false) {
			return false
		}
	}
	initFractal() {
		this.fractal = new NewtonFractal();

		// set parameters (see public/newton-fractal/data)
		this.fractal.params.setParameters(this.inputData);

		this.fractal.params.setDrColor(this.fractal.params.drColor, this.colorsService);
	}
	initRender(idCanvas) {
		super.initRender(idCanvas);

		this.y = 0;

		// def grid with limits
		this.canvasService.defGrid([
			[this.fractal.params.x2, this.fractal.params.y2],
			[this.fractal.params.x1, this.fractal.params.y1]
		], this.width, this.height
		)

		this.canvasService.addBackgroundInImageData([0, 0, 0]);
		this.canvasService.putImageData(0, 0, this.width, this.height);
		this.addMainAnimation(() => this.draw(), 50);
		this.startComponentAnimation();
	}
	draw() {
		// y scan
		this.y += this.step;

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
		for (let x = 0; x <= this.width; x += this.step) {
			// convert canvas point in plan 
			const pt = this.canvasService.getPointFromPlan([x, y]);

			const fractalPt = this.fractal.getPt(pt[0], pt[1], 0);
			if (fractalPt !== null) {
				// save point
				pts.push([
					x,
					y,
					0,
					fractalPt[3],
					fractalPt[4]
				]);
			}
		}
		return pts;
	}
}