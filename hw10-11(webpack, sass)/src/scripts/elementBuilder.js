const $ = require('jquery');

module.exports = (tag = '<div>', content = '', className = 'box') => {
	const element = $(tag);
	element.addClass(className);
	element.html(content);

	return element;
};