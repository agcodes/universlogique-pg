export default class CanvasData32 {
	constructor() {
		this.isLittleEndian = false;
		this.buf8 = null;
		this.data = null;
		this.w = 0;
		this.h = 0;
		this.offSet = 0;
	}
	getImageData(imagedata) {
		imagedata.data.set(this.buf8);
	}
	initialize(imagedata, w, h, offSet) {
		this.w = w;
		this.h = h;

		this.offSet = offSet;
		// new buffer
		const buffer = new ArrayBuffer(imagedata.data.length);

		// Uint8ClampedArray (imagedata.data)
		this.buf8 = new Uint8ClampedArray(buffer);
		// writing object
		this.data = new Uint32Array(buffer);

		// Determine whether Uint32 is little- or big-endian.
		this.data[1] = 0x0a0b0c0d;

		this.isLittleEndian = true;
		if (buffer[4] === 0x0a && buffer[5] === 0x0b && buffer[6] === 0x0c && buffer[7] === 0x0d) {
			this.isLittleEndian = false;
		}
	}
	addBackgroundInImageData(color) {
		if (color === null) {
			return false;
		}

		if (typeof color[3] !== "number") {
			// alpha by default
			color[3] = 255
		}

		const valColor = (this.isLittleEndian) ?
			(color[3] << 24) | // alpha
			(color[2] << 16) | // blue
			(color[1] << 8) | // green
			color[0] :
			(color[0] << 24) | // red
			(color[1] << 16) | // green
			(color[2] << 8) | // blue
			color[3]; // alpha;

		for (let index = 0; index < this.data.length; index++) {
			this.data[index] = valColor;
		}
		return true;
	}
	addPointsInData(pts, color, size) {
		if (pts === null || typeof pts !== 'object') {
			return false;
		}

		for (let i = 0; i < pts.length; i++) {
			if (pts[i]) {
				if (pts[i][3]) {
					this.addOnePointInData(pts[i], pts[i][3], size);
				} else {
					this.addOnePointInData(pts[i], color, size);
				}
			}
		}

		return true;
	}
	addBackgroundInDrawingArea(color, w, h, x1, y1) {
		for (let indexY = y1; indexY < h; indexY++) {
			for (let indexX = x1; indexX < w; indexX++) {
				this.addOnePointInData([indexX, indexY], color, 1);
			}
		}
	}
	addOnePointInData(pt, color, size) {
		if (color === null) {
			return false;
		}

		let x = Math.floor(pt[0]);
		let y = Math.floor(pt[1]);

		if (size > 1) {
			if (size === 2) {
				x -= 1;
				y -= 1;
			} else if (size % 2 === 0) {
				x -= size / 2;
				y -= size / 2;
			} else {
				x -= (size - 1) / 2;
				y -= (size - 1) / 2;
			}
		}

		for (let indexY = 0; indexY < size; indexY++) {
			for (let indexX = 0; indexX < size; indexX++) {
				if (x < 0) {
					return false;
				}
				if (y < 0) {
					return false;
				}
				if (x + 1 > this.w) {
					return false;
				}
				if (y + 1 > this.h) {
					return false;
				}

				const k = y * this.w + x;
				if (k >= 0 && k <= this.data.length) {
					if (typeof color[3] !== 'number' || color[3] === Infinity || color[3] > 255) {
						color[3] = 255 // default alpha
					}

					if (this.isLittleEndian === true) {
						this.data[k] =
							Math.round(color[3]) << 24 | // alpha
							Math.round(color[2]) << 16 | // blue
							Math.round(color[1]) << 8 | // green
							Math.round(color[0]); // red
					} else {
						this.data[k] =
							Math.round(color[0]) << 24 | // red
							Math.round(color[1]) << 16 | // green
							Math.round(color[2]) << 8 | // blue
							Math.round(color[3]); // alpha
					}
				}
				x++;
			}
			y++;
		}
		return true;
	}
}
