const builder = require('./elementBuilder');

module.exports = () => {
	const content = '<p>Easecode 2017 (c)</p>';

	return builder('<footer>', content, 'footer');
}