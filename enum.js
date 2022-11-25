

class Enum {
	constructor(arrOfEnum) {
		Object.assign(this, { ...this.#reduce(arrOfEnum) });
		Object.freeze(this);
	}

	#reduce(enums) {
		return enums.reduce((a, i) => ((a[i] = i), a), {});
	}

	includes(test) {
		return this.hasOwnProperty(test);
	}

	iCaseIgnore(test) {
		return Object.keys(this)
			.map((i) => i.toLowerCase())
			.includes(test.toLowerCase());
	}

	get list() {
		return Object.keys(this);
	}
}

export default Enum;
