import CComplex from 'universlogique-pg/object/math/CComplex';

export default class MandelbrotFunctions {
	
	getFunction(name) {
		const functions = {
			"multiple": (z, m, j, f, args) => {
				// f(z^n+j)
				return z.mul(new CComplex(args[0], args[1])).getC(f);
			},
			"f1": (z, m, j, f) => {
				// classic mandelbrot
				return z.pow(m).add(j).getC(f);
			},
			"f2": (z, m, j, f) => {
				// f(z^n-j)
				return z.pow(m).sub(j).getC(f);
			},
			"f3": (z, m, j, f) => {
				// f(|z|^n+c)
				return z.abs().pow(m).add(j).getC(f);
			}
		};
		return functions[name];
	}
	getFunctionDefinition(name, f, n, args) {
		const functions = {
			"multiple": (n, args) => {
				return "(" + args[0] + "+" + args[1] + "i).z";
			},
			"f1": () => {
				// classic mandelbrot 
				return 'f(z^n+c)';
			},
			"f2": () => {
				return 'f(z^n-c)';
			},
			"f3": () => {
				// burning ship
				return 'f(|z|^n+c)';
			}
		};
		if (functions[name]) {
			const definition = (functions[name](n, args));
			if (typeof definition == 'string') {
				const returnValue =
					this.replaceAllOccurrences(
						this.replaceAllOccurrences(definition,
							"f(", f + "(").trim(),
						"^n", '^' + n + "");

				if (returnValue.substring(0, 1) == "(" && returnValue.substring(returnValue.length - 1) == ")") {
					return returnValue.substring(1).substring(0, returnValue.length - 2);
				}
				return returnValue;
			}
		}
		return "";
	}
	replaceAllOccurrences(originalString, stringToReplace, newString) {
		const escapedStringToReplace = stringToReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		const regex = new RegExp(escapedStringToReplace, 'g');
		return originalString.replace(regex, newString);
	}
	getZnDef(n) {
		if (n == 1) {
			return "z";
		}
		return "z^" + n;
	}
}
