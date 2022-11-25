## Enum Class for JavaScript 

> *Enumeration: A data type that allows variables to have any of a predefined set of values (Wiki)*

### Create

Create a new instance with an array of enums: <br />  
> `const season = new Enum(["SPRING", "SUMMER", "AUTUM", "WINTER"]);`

### Use

| Dot syntax |  |
| ----------- | ----------- |
| `season.SUMMER === "SUMMER"` | *true* |
| `season.SUMMER === "summer"` | *false* |
| `season.SUMMER = "SNOW"` | *ignored* |


| Methods |  |
| ----------- | ----------- |
| `season.includes("WINTER")` | *true* |
| `season.iCaseIgnore("Winter")` | *true* |
| `season.list` | *["SPRING", "SUMMER", "AUTUM", "WINTER"]* |


<br />   

```
> console.log(season)

Enum {
  SPRING: "SPRING",
  SUMMER: "SUMMER",
  AUTUM: "AUTUM",
  WINTER: "WINTER"
}
```



### Code

```
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
```
