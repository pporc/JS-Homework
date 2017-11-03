const builder = require('../elementBuilder');
require('./main.scss');

module.exports = () => {
	const date = new Date();
	let li = '';
	for (let i = 1, j; i <= 20; i++) {
		if (i <= 10) {
			li += `<li class="width${i}">li №${i}</li>`
		} else {
			j = 21 - i;
			li += `<li class="width${j}">li №${i}</li>`
		}
	}

	const content = `<h1>This is title</h1>\n<ul class="list">${li}</ul><div class="date">${date}</div>`;


	return builder('<main>', content, 'main');
}