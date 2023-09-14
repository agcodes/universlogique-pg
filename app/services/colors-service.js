

export default class ColorsService {
	addColors(colors) {
		const color = [0, 0, 0];
		for (let j = 0; j < color.length; j++) {
			for (let index = 0; index < colors.length; index++) {
				color[j] += (colors[index][j]);
			}
		}
		for (let j = 0; j < color.length; j++) {
			if (color[j] > 255) {
				color[j] = 0;
			}
		}
		return color;
	}
	hslToRgbText(hsl) {
		return this.rgbText(this.hslToRgb(hsl));
	}
	relativeRgb(rgb) {
		return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
	}
	rgbText(rgb) {
		if (rgb.length === 4) {
			return "rgba(" + Math.round(rgb[0]) + "," + Math.round(rgb[1]) + "," + Math.round(rgb[2]) + "," + Math.round(rgb[3]) + ")";
		}
		return "rgb(" + Math.round(rgb[0]) + "," + Math.round(rgb[1]) + "," + Math.round(rgb[2]) + ")";
	}
	rgbToHex(rgb) {
		const componentToHex = function(c) {
			const hex = c.toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		};
		return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
	}
	rgbToHsl(rgb) {
		if (rgb === null) {
			return null;
		}

		const r = rgb[0] / 255;
		const g = rgb[1] / 255;
		const b = rgb[2] / 255;

		const max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		let h = (max + min) / 2;
		let s = 0;
		const l = (max + min) / 2;

		if (max === min) {
			h = 0;
		} else {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h = h * 60;
		}
		return [h, s * 100, l * 100];
	}
	hslToHex(hsl) {
		return this.rgbToHex(this.hslToRgb(hsl));
	}
	getRandomHueColor(s, l) {
		return this.hslToRgb([Math.floor(Math.random() * 360), s, l]);
	}
	hslToRgba(hsla) {
		const a = hsla[3];
		const color = this.hslToRgb(hsla);
		color[3] = a;
		return color;
	}
	hslToRgb(hsl) {
		if (hsl === null) {
			return null;
		}

		let r, g, b, m, c, x;
		let h = parseInt(hsl[0], 10);
		if (h < 0) {
			h = h * -1;
		}

		if (h > 360) {
			h = Math.floor(h % 360) + 1;
		}

		let s = parseInt(hsl[1], 10);
		let l = parseInt(hsl[2], 10);

		if (!isFinite(h)) h = 0;
		if (!isFinite(s)) s = 0;
		if (!isFinite(l)) l = 0;

		h /= 60;
		if (h < 0) {
			h = 6 - (-h % 6);
		}

		h %= 6;

		s = Math.max(0, Math.min(1, s / 100));
		l = Math.max(0, Math.min(1, l / 100));

		c = (1 - Math.abs((2 * l) - 1)) * s;
		x = c * (1 - Math.abs((h % 2) - 1));

		if (h < 1) {
			r = c;
			g = x;
			b = 0;
		} else if (h < 2) {
			r = x;
			g = c;
			b = 0;
		} else if (h < 3) {
			r = 0;
			g = c;
			b = x;
		} else if (h < 4) {
			r = 0;
			g = x;
			b = c;
		} else if (h < 5) {
			r = x;
			g = 0;
			b = c;
		} else {
			r = c;
			g = 0;
			b = x;
		}

		m = l - c / 2;
		r = Math.round((r + m) * 255);
		g = Math.round((g + m) * 255);
		b = Math.round((b + m) * 255);

		if (hsl.length >= 4 && typeof hsl[3] === "number" && hsl[3] !== Infinity) {
			if (hsl[3] > 100) {
				hsl[3] = 100;
			}
			if (hsl[3] < 0) {
				hsl[3] = 0;
			}
			return [r, g, b, hsl[3] * 255 / 100];
		}

		return [r, g, b];
	}
	hexToRgb(hex) {
		if (hex === null || typeof hex === "undefined") {
			return null;
		}
		if (hex.length > 7) {
			hex = hex.substring(0, 6);
		}
		for (let index = 0; index < 6; index++) {
			if (hex.length < 6) {
				hex = '0' + hex;
			} else {
				break;
			}
		}

		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
	}
	numberToRgb(number) {
		return this.hexToRgb(this.decimalToHexString(number));
	}
	decimalToHexString(number) {
		if (number < 0) {
			number = 0xFFFFFFFF + number + 1;
		}
		return '#' + number.toString(16).toUpperCase();
	}
	setPointsPerlinNoiseColor(pts, h, s, l, dh, ds, dl) {
		for (let index = 0; index < pts.length; index++) {
			pts[index][3] = this.getPerlinNoiseColor(pts[index], h, s, l, dh, ds, dl);
		}
		return pts;
	}
	getPerlinNoiseColor(pt, h, s, l, dh, ds, dl) {
		if (pt !== null) {
			return this.hslToRgb([
				h + dh * this.noise2d(pt[0], pt[1]),
				s + ds * this.noise2d(pt[0], pt[1]),
				l + dl * this.noise2d(pt[0], pt[1])
			])
		}
		return [0, 0, 0];
	}
	noise2d(x, y) {
		return this.smoothNoise(this.smoothNoise(x) * 850000 + y);
	}
	linear_interpolate(a, b, t) {
		return (1. - t) * a + t * b;
	}
	smoothNoise(x) {
		//Bruit du point précédent
		//Bruit du point suivant
		//Interpolation :
		return this.linear_interpolate(this.randNoise(x), this.randNoise(x + 1), 0);
	}
	//Fournit une valeur aléatoire entre -1 et 1
	randNoise(t) {
		//t = (t << 13) ^ t;
		return (1.0 - (((t * (t * t * 15731 + 889221) + 1376312589)) & 0x7fffffff) / 1073741824.0 + 1.) / 2;
	}
	lerpForPoint(x, y, t) {
		const pi = Math.PI;
		return this.lerp((Math.cos(t * 2 * pi) + 1) / 2, x * Math.sin(t * 2 * pi), y) * -1;
	}
	lerp(v0, v1, amt, maxMove = 0, minDiff = 0.0001) {
		let diff = v1 - v0;
		if (maxMove > 0) {
			diff = Math.min(diff, maxMove);
			diff = Math.max(diff, -maxMove);
		}
		if (Math.abs(diff) < minDiff) {
			return v1;
		}
		return v0 + diff * amt;
	}
}
