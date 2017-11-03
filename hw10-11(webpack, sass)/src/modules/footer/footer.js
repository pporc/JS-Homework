const builder = require('../elementBuilder');
require('./footer.scss');

module.exports = () => {
	const content = '<p>Easecode 2017 (c)</p><a href="#">Home</a>';

	return builder('<footer>', content, 'footer');
}