/*

 const season = new Enum(["SPRING", "SUMMER", "AUTUM", "WINTER"]);

 season.SUMMER === "SUMMER";    // true
 season.SUMMER === "summer";    // false

 season.includes("SUMMER")      // true
 season.iCaseIgnore("summer")   // true

 season.list                    // ["SPRING", "SUMMER", "AUTUM", "WINTER"] 
 season.SUMMER = "SNOW"         // immutable (no effect)

*/

class Enum {

	constructor(arrOfEnum) {
		Object.assign(this, { ...this.#reduce(arrOfEnum) });
		Object.freeze(this);
	}

	#reduce(enums) {
		return Array.isArray(enums) 
			? enums.reduce((a, i) => ((a[i] = i), a), {})
			: Object.entries(enums).reduce((a, i) => ((a[i[0]] = i[0]), a), {})
	}

	includes(test) {
		return this.hasOwnProperty(test);
	}

  iCaseIgnore(test) {
    return Object.keys(this).map(i => i.toLowerCase()).includes(test.toLowerCase())
	}

  get list(){
    return Object.keys(this)
  }

}

export default Enum






