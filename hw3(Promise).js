//1
let promiseCreator = (time, value) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => console.log(value), time); 
	})

	return promise;
}

//3

// https://plnkr.co/edit/B45hok2fennR16H34Kck

//2
class Prom {
	constructor(){
		this.promise = new Promise((res, rej) => {
			this.resolve = res;
			this.reject = rej;
		});
	}
}

//4
fetch('https://jsonplaceholder.typicode.com/posts')
	.then( response => response.json() )
	.then( posts => createList(posts) );


const createList = arr => {
	let ul = document.createElement('ul');

	arr.forEach( obj => ul.innerHTML += `<li> id: ${obj.id}, title: ${obj.title}</li>`);
	document.body.appendChild(ul);
}

//5
const prom = Promise.all([
   fetch('https://jsonplaceholder.typicode.com/users'),
   fetch('https://jsonplaceholder.typicode.com/posts')
]);

prom
.then(response => Promise.all( response.map(item => item.json() )) )
.then( data => console.log( `users: ${data[0].length} \nposts: ${data[1].length}` ) )