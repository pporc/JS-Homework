//spread/rest
//1
const number = [1,2,3,4,5,6,7,8,9,0];
Math.max(...number);

//2
const a = [1,2,3],
			b = [4,5,6];

let ab = [...a, ...b];

//3
const write = (...arg) => document.write(...arg);

//destructuring
//1
const getFirstArg = (firstEl, ...arg) => ({first: firstEl, other: arg});

//2
const organisation = {
	name: 'Google',
	info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }
};

const getInfo = obj => {
	const {name = 'Unknown'} = obj,
				[partner1, partner2] = obj.info.partners;

	return console.log( 'Name: ' + name, '\nPartners: ' + partner1, partner2 );
};

//Arrow function
//1
const sum = (...args) => args.reduce( (prev, next) => prev + next);

//2 
const utils = {
	numbers: [1,2,3,4],
	prefix: 'number',
	getOdd: function (){ return this.numbers.map( (number) =>  `${this.prefix} - ${number}`)}
}

//3
const getDate = () => new Date();

const getDay = () => {
	const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	return days[new Date().getDay()];
}

const getListCopy = list => [...list];