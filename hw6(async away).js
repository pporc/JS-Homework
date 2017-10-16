//1

// https://plnkr.co/edit/NKjtRhpm1xIgMW4SPkpd

//2
const getTodos = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const todos = await response.json();
	const ul = document.createElement('ul');

	let users = [], id = 1, someUser = [];

	todos.forEach( val => {
		if (val.userId !== id) {
			users.push(someUser);
			someUser = [];
			id++
		} else if (val == todos[todos.length - 1]) {
			someUser.push(val);
			users.push(someUser);
			return;
		}
		someUser.push(val);
	})

	users.forEach( user => {
		let completed = 0, failed = 0;

		for (let i = 0; i < user.length; i++) {
			user[i].completed ? completed++ : failed++;
		}

		ul.innerHTML += `<li>Пользователь userID=${user[0].userId} имеет ${completed} завершенных и ${failed} не завершенных заданий</li>`;
	})

	document.body.appendChild(ul);
};

//3

// https://codepen.io/pporc/pen/gGdGqE

//4
function getValuesFromGenerator(generator) {
	if (!generator || generator.constructor.name != 'GeneratorFunction') { return [] };

	let it = generator(),
			arr = [];

	for (let val of it) { 
  	arr.push(val)
  if (arr.length === 100) { it.return(); }
	}
	
	return arr;
}

//5
const list = [
  'https://jsonplaceholder.typicode.com/users', 
  'https://jsonplaceholder.typicode.com/posts', 
  'https://jsonplaceholder.typicode.co/albums'
];

let getRequest = async (arr) => {
	const request = [];

	for (let url of arr) {
		await fetch(url)
			.then( response => response.json() )
			.then( val => request.push(val) )
			.catch( err => console.log(err) );
	};
	
	return console.log(request);
}

getRequest(list);
