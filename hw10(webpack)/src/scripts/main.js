const builder = require('./elementBuilder');

module.exports = () => {
	const date = new Date();
	const content = `<h1>This is title</h1>\n<span>${date}</span>`;

	return builder('<main>', content, 'main');
}