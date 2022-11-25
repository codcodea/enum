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

// export default Enum


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const days_ = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY', 'SUNDAY']

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const months_ = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER','NOVEMBER', 'DECEMBER']


const year = {
	JANUARY: 31,
	FEBRUARY: 28,
	MARCH: 31,
	APRIL: 30, 
	MAY: 31,
	JUNE: 30,
	JULY: 31,
	AUGUST: 31,
	SEPTEMBER: 30,
	OCTOBER: 31, 
	NOVEMBER: 30,
	DECEMBER: 31
}

const dayss = new Enum(year)

console.log(dayss)