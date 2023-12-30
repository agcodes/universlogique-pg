
import Canvas2dService from "../services/canvas2d-service";
import Component from "@glimmer/component";
import AnimationService from "../services/animation-service";
import ColorsService from "../services/colors-service";

export default class DrawingComponent extends Component {
	canvasService = null;
	animationService = null;
	colorsService = null;
	fps = 50;
	width = 400;
	height = 400;
	inputData=null;
	constructor(owner, args) {
		super(owner, args);
		this.inputData = args.inputData;
		this.colorsService = new ColorsService();
		this.canvasService = new Canvas2dService();
	}
	initComponent(idCanvas) {
		this.intervalID = setTimeout(() => {
			this.initRender(idCanvas);
		}, 200);
	}
	initRender(idCanvas) {
		this.canvasService.setContext(idCanvas);
		this.canvasService.setCanvasData(this.width, this.height, 0, 0);
	}
	addMainAnimation(f, fps) {
		this.withAnimation = true;
		this.setAnimationService();
		this.animationService.functions.animation = f;
		if (typeof fps === "number") {
			this.fps = fps;
		}
	}
	setAnimationService() {
		if (this.animationService === null) {
			this.animationService = new AnimationService();
		}
	}
	startComponentAnimation() {
		this.startMainAnimation(this.fps);
	}
	startMainAnimation(fps_, bFirstDraw, params) {
		this.setAnimationService();
		if (typeof fps_ !== "number") {
			fps_ = this.fps;
		}
		if (typeof bFirstDraw !== "boolean") {
			bFirstDraw = true;
		}
		this.startAnimation(fps_, "animation", bFirstDraw, params);
	}
	startAnimation(fps_, f, bFirstDraw, params) {
		this.animationOn = true;
		this.animationService.startAnimation(fps_, f, bFirstDraw, params);
		return true;
	}
}