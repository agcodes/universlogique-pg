/* eslint-disable no-unused-vars */
import CComplex from 'universlogique-pg/object/math/CComplex';

export default class NewtonFractalFunctions {
	getFunction(name) {
		const functions = {
			// f(z^n)-c
			'f1': (z, n, f, c) => z.getC(f).pow(n).sub(c),
			// z+f(z^n)+c
			'f2': (z, n, f, c) => z.add(z.getC(f).pow(n)).add(c),
			// z^(n-2)+f(z)^n+c
			'f3': (z, n, f, c) => z.pow(n - 2).add(z.getC(f).pow(n)).add(c),
			// f(z)^n+c
			'f4': (z, n, f, c) => z.getC(f).pow(n).add(c),
			// f(z)^n.c+z
			'f5': (z, n, f, c) => z.getC(f).pow(n).mul(c).add(z),
			// f(z)^n+c.z
			'f6': (z, n, f, c) => z.getC(f).mul(z.pow(n).add(c)),
			// f(z^n+c)
			'f7': (z, n, f, c) => z.pow(n).add(c).getC(f),
			// f(z^n)-c^n
			'f8': (z, n, f, c) => z.pow(n).getC(f).sub(c.pow(n)),
			// f(z^n+(c+z^n-1))
			'f9': (z, n, f, c) => z.pow(n).add(c.add(z.pow(n - 1)).getC(f)),
			// f(z)^n-z+c
			'f10': (z, n, f, c) => z.getC(f).pow(n).sub(z).add(c),
			// f(z.(c+z^n+z)+c2-z)
			'f11': (z, n, f, c, c2) => z.mul(c.add(z.pow(n)).add(z)).add(c2).sub(z).getC(f),
			// f(z^n)+c/z
			'f12': (z, n, f, c) => z.pow(n).getC(f).add(c.div(z)),
			// f(z^n)+z^n-1+z-c
			'f13': (z, n, f, c) => z.pow(n).getC(f).add(z.pow(n - 1)).add(z).sub(c),
			// f(z^n)+c2.z^n-1+z+c
			'f14': (z, n, f, c, c2) => z.pow(n).getC(f).add(c2.mul(z.pow(n - 1))).add(z).add(c),
			// f(z^n)+c+c2
			'f15': (z, n, f, c, c2) => z.pow(n).getC(f).add(c).add(c2),
			// (f(z^n)+c).z
			'f16': (z, n, f, c) => z.pow(n).getC(f).add(c).mul(z),
			// f(z^(n-3))+(z^n/(z+c2))+c
			'f17': (z, n, f, c, c2) => z.pow(n - 3).getC(f).add(z.pow(n).div(z.add(c2))).add(c),
			'f18': (z, n, f, c) => z.pow(n).getC(f).add(z.add(c).div(z.add(new CComplex(1, 0)))),
			// (f(z^n)+c)/z
			'f19': (z, n, f, c) => z.pow(n).getC(f).add(c).div(z),
			// (f(z^n)-c).c2
			'f20': (z, n, f, c, c2) => z.pow(n).getC(f).sub(c).mul(c2),
			'f21': (z, n, f, c) => z.pow(n).getC(f).div(z.add(c).pow(n - 1)).add(c),
			'f22': (z, n, f, c) => z.pow(n).getC(f).mul(z.pow(n - 1).add(c)).div(z.pow(n - 2).add(c)).add(c),
			// f(z^(n-3))+z^n+c
			'f23': (z, n, f, c) => z.pow(n - 3).getC(f).add(z.pow(n)).add(c),
			// f(z^n)+z^(n-1)+2.c
			'f24': (z, n, f, c) => z.pow(n).getC(f).add(z.pow(n - 1)).add(c.mulReal(2)),
			'f25': (z, n, f, c) => z.pow(n).getC(f).add(c.add(z.pow(n - 1))).add(c.add(z.pow(n - 1))),
			'f26': (z, n, f, c) => z.pow(n).add(c).mul((z.add(c).squareAtan())).getC(f),
			// f(z^(n*2)+c-z^n)
			'f27': (z, n, f, c) => z.pow(n * 2).add(c).sub(z.pow(n)).getC(f),
			// f(z^(-n)+c-z^2)
			'f28': (z, n, f, c) => z.pow(n).add(c).sub(z.pow(2)).getC(f),
			// f(|c+(z^n)|)
			'f29': (z, n, f, c) => c.add(z.pow(n)).abs().getC(f),
			// |f(z^n)|/z-c
			'f30': (z, n, f, c) => z.pow(n).getC(f).abs().div(z).sub(c),
			// f(z)-z^n-c
			'f31': (z, n, f, c) => z.getC(f).sub(z.pow(n)).sub(c),
			// z-(z^n)-|c|
			'f32': (z, n, f, c) => z.getC(f).sub(z.pow(n)).sub(c.abs()),
			// f(z-((z.c)^n)-c)
			'f33': (z, n, f, c) => z.sub(z.mul(c).pow(n)).sub(c).getC(f),
			// z-(z^n+|c|)
			'f34': (z, n, f, c) => z.getC(f).sub(z.pow(n / 2).add(c)),
			'f35': (z, n, f, c, c2, args) => z.sub(z.mul(new CComplex(args[0], args[1]))),
			// f(z^n)+z^n-1+z-c
			'f36': (z, n, f, c) => z.pow(n).getC(f).add(z.pow(n - 1)).add(z).sub(c).sub(c),
			'f37': (z, n, f, c) => z.abs().getC(f).pow(n).add(c),
			'f38': (z, n, f, c) => z.getC(f).abs().pow(n).sub(z).add(c)
		};
		return functions[name];
	}
	getFunctionDefinition(name, f, n, args, c) {
		// TODO : complete string definitions
		const functions = {
			"f1": () => {
				return 'f(z)^n-c';
			},
			'f2': (n) => {
				return 'z+(f(z)^n)+c';
			},
			'f3': (n) => {
				return "z^" + (n - 2) + "+f(z)^n+c";
			},
			'f4': (n) => {
				return "f(z)^n+c";
			},
			'f5': (n) => {
				return "f(z)^n.c+z";
			},
			'f6': (n) => {
				return "f(z)^n+c.z";
			},
			'f7': (n) => {
				return "f(z^n+c)";
			},
			'f8': (n) => {
				return "f(z^n+(c+z^" + (n - 1) + "))";
			},
			'f9': (n) => {
				return "f(z^n)-c^n";
			},
			'f10': (n) => {
				return "f(z)^n-z+c";
			},
			'f11': (n) => {
				return "";
			},
			'f12': (n) => {
				return "f(z^n)+c/z";
			},
			'f13': (n) => {
				return "f(z^n)+z^" + (n - 1) + "+z-c";
			},
			'f14': (n) => {
				return "";
			},
			'f15': (n) => {
				return "f(z^n)+c+(2,0)";
			},
			'f16': (n) => {
				return "(f(z^n)+c).z";
			},
			'f17': (n) => {
				return "";
			},
			'f18': (n) => {
				return "";
			},
			'f19': (n) => {
				return "(f(z^n)+c)/z";
			},
			'f20': (n) => {
				return "";
			},
			'f21': (n) => {
				return "";
			},
			'f22': (n) => {
				return "";
			},
			'f23': (n) => {
				return "f(z^" + (n - 3) + ")+z^n+c";
			},
			'f24': (n) => {
				return "f(z^n)+z^" + (n - 1) + "+2.c";
			},
			'f25': (n) => {
				return "";
			},
			'f26': (n) => {
				return "";
			},
			'f27': (n) => {
				return "f(z^" + n * 2 + "+c-z^n)";
			},
			'f28': (n) => {
				return "f(z^n+c-z^2)";
			},
			'f29': (n) => {
				return "f(|c+(z^n)|)";
			},
			'f30': (n) => {
				return "|f(z^n)|/z-c";
			},
			'f31': (n) => {
				return "f(z)-z^n-c";
			},
			'f32': (n) => {
				return "z-z^n-|c|";
			},
			'f33': (n) => {
				return "f(z-((z.c)^n)-c)";
			}
		};
		if (functions[name]) {
			const cValue = (c !== null) ? " with c = (" + c.a + "," + c.b + ")" : "";
			const definition = (functions[name](n, args, c));
			if (typeof definition == 'string') {
				let returnValue = "";

				if (f === "") {
					returnValue = this.replaceAllOccurrences(definition.replace(/f\((.*?)\)/g, "$1"), "^n", '^' + n + "");
				}
				else {
					returnValue = this.replaceAllOccurrences(
						this.replaceAllOccurrences(definition,
							"f(", f + "(").trim(),
						"^n", '^' + n + "");
				}

				if (returnValue.substring(0, 1) == "(" && returnValue.substring(returnValue.length - 1) == ")") {
					return returnValue.substring(1).substring(0, returnValue.length - 2);
				}
				return returnValue + cValue;
			}
		}
		return "";
	}
	replaceAllOccurrences(originalString, stringToReplace, newString) {
		const escapedStringToReplace = stringToReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		const regex = new RegExp(escapedStringToReplace, 'g');
		return originalString.replace(regex, newString);
	}
	getDerivativeFunction(type) {
		const functions = {
			// zn-c => n.zn-1
			'f1': (z, n) => new CComplex(n, 0).mul(z.pow(n - 1)),
			'f2': (z, n) => new CComplex(1, 0).add(new CComplex(n, 0).mul(z.pow(n - 1))),
			'f4': (z, n) => new CComplex(n, 0).mul(z.pow(n - 1)),
			'f6_': (z, n) => new CComplex(1, 0).mul(new CComplex(n, 0)).mul(z.pow(n - 1)),
			'f7': (z, n) => new CComplex(n, 0).mul(z.pow(n - 1)),
			'f8': (z, n) => new CComplex(n, 0).mul(z.pow(n - 1)),
			'f10': (z, n) => new CComplex(n, 0).mul(z.pow(n - 1)).sub(new CComplex(1, 0)),
			'f31': (z, n) => new CComplex(1, 0).sub(z.pow(n - 1).mul({a: n, b: 0}))
		};
		if (typeof functions[type] === "undefined") {
			return null;
		}
		return functions[type];
	}
}