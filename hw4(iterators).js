//1
const names = { 0: 'Vasya', 1: 'Petya', 2: 'Kolya' };

names.length = Object.keys(names).length;

let iterable = Array.from(names);


//2
const obj = { zone: true, word: 'test', skill: 'JS', name: 'John' };

obj[Symbol.iterator] = function () {
	let index = 0, sortArr;

	sortArr = Object.keys(obj).sort();
	
	return {
    next: () => ({ 
      value: obj[sortArr[index++]], 
      done: index > sortArr.length 
    })
  };
}

//3
const date = { [Symbol.iterator]: function () {
	let index = 0;

  return  {
    next: () => {
    	let now = new Date();
			const values = [
			`FullYear is ${now.getFullYear()}`,
			`Month is ${now.getMonth()+1}`,
			`Day is ${now.getDay()}`,
			`Today is ${now.getDate()}`,
			`Hours is ${now.getHours()}`,
			`Minutes is ${now.getMinutes()}`,
			`Seconds is ${now.getSeconds()}`];

	    if (index < values.length) {
	      return {
		      value: values[index++],
		      done: false
	    	};
	    } else {
	    	return { done: true }; 
	    }
  	}
  }
}}