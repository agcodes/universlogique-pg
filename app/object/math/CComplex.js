/*
 * https://github.com/justinlubin/newton-js
 * https://github.com/infusion/Complex.js/blob/master/complex.js
 */
export default class CComplex {
	// a + bi
	constructor(a, b, c) {
		this.a = a; // r real
		this.b = b; // i imaginary
		this.c = (typeof c === "number") ? c : 0; // add "3rd dimension" for fun
		this.square = 0;
	}
	setSquare() {
		this.square = this.squaresSum();
		return this.square;
	}
	getArgument() {
		return Math.atan2(this.b, this.a);
	}
	squaresSum() {
		return this.a * this.a + this.b * this.b;
	}
	getMagnitude() {
		return Math.sqrt(this.squaresSum());
	}
	signR() {
		if (this.a < 0) {
			return -1;
		}
		if (this.a === 0) {
			return 0;
		}
		if (this.a > 0) {
			return 1;
		}
	}
	addReal(r) {
		return new CComplex(
			this.a + r,
			this.b,
			this.c
		)
	}
	addImg(i) {
		return new CComplex(
			this.a,
			this.b + i,
			this.c
		)
	}
	add(c) {
		return new CComplex(
			this.a + c.a,
			this.b + c.b,
			this.c + c.c
		);
	}
	sub(c) {
		return new CComplex(
			this.a - c.a,
			this.b - c.b,
			this.c - c.c
		);
	}
	mul(z) {
		return new CComplex(
			this.a * z.a - this.b * z.b,
			this.b * z.a + this.a * z.b,
			this.c
		);
	}
	mulReal(r) {
		return new CComplex(
			this.a * r,
			this.b * r,
			this.c * r
		)
	}
	div(z) {
		const denominator = z.a * z.a + z.b * z.b + z.c * z.c;
		return new CComplex(
			(this.a * z.a + this.b * z.b) / denominator,
			(this.b * z.a - this.a * z.b) / denominator,
			this.c
		);
	}
	inverse() {
		this.setSquare();
		const c1 = new CComplex(1, 0, 0);
		const denominator = this.square + this.c * this.c;
		return new CComplex(
			(c1.a * this.a + c1.b * this.b) / denominator,
			(c1.b * this.a - c1.a * this.b) / denominator
		);
	}
	iAbs() {
		return new CComplex(
			this.a,
			Math.abs(this.b),
			this.c
		);
	}
	rAbs() {
		return new CComplex(
			Math.abs(this.a),
			this.b,
			this.c
		);
	}
	abs() {
		return new CComplex(
			Math.abs(this.a),
			Math.abs(this.b),
			Math.abs(this.c)
		);
	}
	opposite() {
		return new CComplex(
			-this.a,
			-this.b,
			-this.c
		);
	}
	conjugate() {
		return new CComplex(
			this.a,
			-this.b,
			this.c
		);
	}
	pow(n) {
		if (typeof this.c === "number" && this.c !== 0) {
			// handle 3rd dimension if defined
			if (n > 1 && n % 2 === 0) {
				return this.pow3d(n);
			}
		}

		switch (n) {
			case 0:
				return new CComplex(
					1,
					0,
					0
				);
			case 1:
				return new CComplex(
					this.a,
					this.b,
					this.c
				);
			case 2:
				return new CComplex(
					// a2 – b2
					this.a * this.a - this.b * this.b,
					// (2ab)
					2 * this.a * this.b
				);
			case 3:
				return new CComplex(
					//  a3 – 3ab2
					Math.pow(this.a, 3) - 3 * this.a * this.b * this.b,
					// (3a2b – b3)
					3 * this.a * this.a * this.b - Math.pow(this.b, 3)
				);
			case 4:
				return new CComplex(
					//  a4 – 6a2b2 + b4
					Math.pow(this.a, 4) - 6 * this.a * this.a * this.b * this.b + Math.pow(this.b, 4),
					// (4a3b – 4ab3)
					4 * Math.pow(this.a, 3) * this.b - 4 * this.a * Math.pow(this.b, 3)
				);
			default:
		}

		// generic formula
		const arg = this.getArgument();
		const magnitude = this.getMagnitude();
		return new CComplex(Math.cos(n * arg) * (Math.pow(magnitude, n)), Math.sin(n * arg) * (Math.pow(magnitude, n)));
	}
	pow3d(n) {
		let z = new CComplex(
			this.a,
			this.b,
			this.c
		);

		for (let j = 0; j < (n / 2); j++) {
			// z*z
			z = z.square3d();
		}
		return z;
	}
	square3d() {
		this.setSquare();
		return new CComplex(
			(this.square - this.c * this.c) * (this.a * this.a - this.b * this.b) / (this.square),
			2 * (this.square - this.c * this.c) * this.a * this.b / (this.square),
			-2 * this.c * Math.sqrt(this.square)
		);
	}
	isZero() {
		return this.b === 0 && this.a === 0;
	}
	getC(f) {
		switch (f) {
			case '':
			case '0':
				return this;
			case 'rAbs':
				return this.rAbs();
			case 'iAbs':
				return this.rAbs();
			case 'abs':
				return this.abs();
			case 'inverse':
				return this.inverse();
			case 'conjugate':
				return this.conjugate();
			case 'opposite':
				return this.opposite();
			case 'sin':
				return this.sin();
			case 'cos':
				return this.cos();
			case 'cosh':
				return this.cosh();
			case 'sinh':
				return this.sinh();
			case 'tan':
				return this.tan();
			case 'tanh':
				return this.tanh();
			case 'cot':
				return this.cot();
			case 'coth':
				return this.coth();
			case 'sec':
				return this.sec();
			case 'sech':
				return this.sech();
			case 'csc':
				return this.csc();
			case 'csch':
				return this.csch();
			case 'atan':
				return this.atan();
			case 'acos':
				return this.acos();
			case 'acosh':
				return this.acosh();
			case 'acot':
				return this.acot();
			case 'acoth':
				return this.acoth();
			case 'asin':
				return this.asin();
			case 'asinh':
				return this.asinh();
			case 'asec':
				return this.asec();
			case 'asech':
				return this.asech();
			case 'acsc':
				return this.acsc();
			case 'log':
				return this.log();
			case 'ln':
				return this.ln();
			case 'sqrt':
				return this.sqrt();
			case 'cosCoshSinSinh':
				return this.cosCoshSinSinh();
			case 'cosCoshSinSinh2':
				return this.cosCoshSinSinh2();
			case 'squareDiv':
				return this.squareDiv();
			case 'squareTan':
				return this.squareTan();
			case 'squareAtan':
				return this.squareAtan();
			case 'expDiv':
				return this.expDiv();
			case 'expDivSinh':
				return this.expDivSinh();
			default:
				return this;
		}
	}
	transform(args) {
		if (args === null || args.length === 0) {
			return this;
		}

		this.a += args[0];
		if (args.length == 1) {
			return this;
		}

		this.b += args[1];
		if (args.length == 2) {
			return this;
		}

		this.c += args[2];
		if (args.length == 3) {
			return this;
		}

		if (args.length > 3) {
			this.a *= args[3];
		}

		if (args.length > 4) {
			this.b *= args[4];
		}

		if (args.length > 5) {
			this.c *= args[5];
		}
		return this;
	}
	sqrt() {
		const d = Math.sqrt(this.squaresSum());
		const a = Math.sqrt((d + this.a) / 2);
		const b = (d / Math.abs(d)) * Math.sqrt((d - this.a) / 2);
		return new CComplex(a, b);
	}
	log() {
		return new CComplex(
			this.logHypot(this.a, this.b),
			Math.atan2(this.b, this.a));
	}
	logHypot(a, b) {
		const _a = Math.abs(a);
		const _b = Math.abs(b);

		if (a === 0) {
			return Math.log(_b);
		}
		if (b === 0) {
			return Math.log(_a);
		}
		if (_a < 3000 && _b < 3000) {
			return Math.log(a * a + b * b) * 0.5;
		}
		return Math.log(a / Math.cos(Math.atan2(b, a)));
	}
	sin() {
		// sin(a).cosh(b)+i cos(a).sinh(b)
		return new CComplex(
			Math.cosh(this.b) * Math.sin(this.a),
			Math.sinh(this.b) * Math.cos(this.a)
		);
	}
	sinh() {
		// sinh(a+bi)=sinh(a).cos(b)+i cosh(a).sin(b)
		return new CComplex(
			Math.sinh(this.a) * Math.cos(this.b),
			Math.cosh(this.a) * Math.sin(this.b)
		);
	}
	cos() {
		// cos(a).cosh(b) − i sin(a).sinh(b)
		return new CComplex(
			Math.cosh(this.b) * Math.cos(this.a),
			-Math.sinh(this.b) * Math.sin(this.a)
		);
	}
	cosh() {
		// cosh(a+bi)=cosh(a).cos(b) + i sinh(a).sin(b)
		return new CComplex(
			Math.cosh(this.a) * Math.cos(this.b),
			Math.sinh(this.a) * Math.sin(this.b)
		);
	}
	tan() {
		const d = Math.cos(2 * this.a) + Math.cosh(2 * this.b);
		return new CComplex(
			Math.sin(2 * this.a) / d,
			Math.sinh(2 * this.b) / d
		);

	}
	tanh() {
		const d = Math.cosh(2 * this.a) + Math.cos(2 * this.b);
		return new CComplex(
			Math.sinh(2 * this.a) / d,
			Math.sin(2 * this.b) / d);
	}
	cot() {
		// cot(c) = i(e^(ci) + e^(-ci)) / (e^(ci) - e^(-ci))
		const d = Math.cos(2 * this.a) - Math.cosh(2 * this.b);
		return new CComplex(
			-Math.sin(2 * this.a) / d,
			Math.sinh(2 * this.b) / d
		);
	}
	coth() {
		const d = Math.cosh(2 * this.a) - Math.cos(2 * this.b);
		return new CComplex(
			Math.sinh(2 * this.a) / d,
			-Math.sin(2 * this.b) / d);
	}
	sec() {
		// (cos(a).cosh(b) + i sin(a).sinh(b)) / cos2(a).cosh2(b)+sin2(a).sinh2(b)
		const d = 0.5 * Math.cosh(2 * this.b) + 0.5 * Math.cos(2 * this.a);
		return new CComplex(
			Math.cos(this.a) * Math.cosh(this.b) / d,
			Math.sin(this.a) * Math.sinh(this.b) / d
		);
	}
	sech() {
		const d = Math.cos(2 * this.b) + Math.cosh(2 * this.a);
		return new CComplex(
			2 * Math.cosh(this.a) * Math.cos(this.b) / d,
			-2 * Math.sinh(this.a) * Math.sin(this.b) / d);
	}
	csc() {
		const d = 0.5 * Math.cosh(2 * this.b) - 0.5 * Math.cos(2 * this.a);
		return new CComplex(
			Math.sin(this.a) * Math.cosh(this.b) / d,
			-Math.cos(this.a) * Math.sinh(this.b) / d);
	}
	csch() {
		const d = Math.cos(2 * this.b) - Math.cosh(2 * this.a);
		return new CComplex(
			-2 * Math.sinh(this.a) * Math.cos(this.b) / d,
			2 * Math.cosh(this.a) * Math.sin(this.b) / d);
	}
	acos() {
		const t1 = new CComplex(
			this.b * this.b - this.a * this.a + 1,
			-2 * this.a * this.b).pow(1 / 2);

		const t2 = new CComplex(
			t1.a - this.b,
			t1.b + this.a).log();

		return new CComplex(Math.PI / 2 - t2.b, t2.a);
	}

	acosh() {
		let res = this.acos();
		let tmp = 0;
		if (res.b <= 0) {
			tmp = res.a;
			res.a = -res.b;
			res.b = tmp;
		} else {
			tmp = res.b;
			res.b = -res.a;
			res.a = tmp;
		}
		return res;
	}
	asinh() {
		let tmp = this.b;
		this.b = -this.a;
		this.a = tmp;
		let res = this.asin();

		this.a = -this.b;
		this.b = tmp;
		tmp = res.a;

		res.a = -res.b;
		res.b = tmp;
		return res;
	}
	acoth() {
		if (this.a === 0 && this.b === 0) {
			return new CComplex(0, Math.PI / 2);
		}

		if (this.setSquare() === 0) {
			return new CComplex(Infinity, Infinity);
		}

		return new CComplex(
			this.a / this.square,
			-this.b / this.square).atanh();
	}
	acsch() {
		if (this.b === 0) {
			return new CComplex(
				(this.a !== 0) ?
					Math.log(this.a + Math.sqrt(this.a * this.a + 1)) :
					Infinity, 0);
		}

		if (this.setSquare() === 0) {
			return new CComplex(Infinity, Infinity);
		}
		return new CComplex(
			this.a / this.square,
			-this.b / this.square).asinh();
	}
	asech() {
		if (this.setSquare() === 0) {
			return new CComplex(Infinity, Infinity);
		}
		return new CComplex(
			this.a / this.square,
			-this.b / this.square).acosh();
	}
	asin() {
		// asin(c) = -i * log(ci + sqrt(1 - c^2))

		let t1 = new CComplex(
			this.b * this.b - this.a * this.a + 1,
			-2 * this.a * this.b).pow(1 / 2);

		let t2 = new CComplex(
			t1.a - this.b,
			t1.b + this.a).log();

		return new CComplex(t2.b, -t2.a);
	}
	acot() {
		if (this.setSquare() === 0) {
			return new CComplex(Math.atan2(1, this.a), 0);
		}

		return new CComplex(
			this.a / this.square,
			-this.b / this.square).atan();
	}
	asec() {
		if (this.setSquare() === 0) {
			return new CComplex(0, Infinity);
		}

		return new CComplex(
			this.a / this.square,
			-this.b / this.square).acos();
	}
	acsc() {
		if (this.setSquare() === 0) {
			return new CComplex(Math.PI / 2, Infinity);
		}

		return new CComplex(
			this.a / this.square,
			-this.b / this.square).asin();
	}
	atan() {
		if (this.a === 0) {
			if (this.b === 1) {
				return new CComplex(0, Infinity);
			}

			if (this.b === -1) {
				return new CComplex(0, -Infinity);
			}
		}

		const d = this.a * this.a + (1.0 - this.b) * (1.0 - this.b);

		const t1 = new CComplex(
			(1 - this.b * this.b - this.a * this.a) / d,
			-2 * this.a / d).log();

		return new CComplex(-0.5 * t1.b, 0.5 * t1.a);
	}
	ln() {
		this.setSquare();
		//0.5 * ln(x² + y²) + 
		// i atan(x / y)
		return new CComplex(
			0.5 * Math.log10(this.square),
			Math.atan(this.a / this.b)
		);
	}
	cosCoshSinSinh2() {
		return new CComplex(
			Math.cosh(this.b) * Math.sin(this.a),
			-Math.sinh(this.b) * Math.cos(this.a),
			0
		);
	}
	cosCoshSinSinh() {
		return new CComplex(
			Math.cosh(-this.b) * Math.cos(this.a),
			Math.sinh(-this.b) * Math.sin(this.a),
			0
		);
	}
	expDiv() {
		return new CComplex(
			0.5 * Math.exp(this.squaresSum()),
			this.a / this.b,
			0
		);
	}
	expDivSinh() {
		return new CComplex(
			0.5 * Math.exp(this.squaresSum()),
			Math.sinh(this.a / this.b),
			0
		);
	}
	squareDiv() {
		return new CComplex(
			this.squaresSum(),
			this.a / this.b,
			0
		);
	}
	squareAtan() {
		return new CComplex(
			this.squaresSum(),
			Math.atan(this.a / this.b),
			0
		);
	}
	squareTan() {
		return new CComplex(
			this.squaresSum(),
			Math.tan(this.a / this.b),
			0
		);
	}
}
