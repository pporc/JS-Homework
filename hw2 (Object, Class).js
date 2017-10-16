//Object
//1
const getObject = (name = 'User', age = 25) => ({name, age});

//2
const string = {
	someStr: 'this is some string',
	getLength() { return this.someStr.length; },
	getReverseStr() { return this.someStr.split('').reverse().join(''); }
}

//3
const getOneObject = (...args) => Object.assign(...args);

//Classes
//1
class Component {
	constructor(tagName = 'div') {
		this.tagName = tagName;
		this.node = document.createElement(tagName);
	}
}

//2
class Component {
	constructor(tagName = 'div') {
		this.tagName = tagName;
		this.node = document.createElement(tagName);
	}
	setText(text) { return this.node.textContent = text; }
}

//3
class InputComponent extends Component {
	constructor(tagName) {
		super(tagName);
		this.node.placeholder = 'Enter text';
	}
}

//4
class Figure {
	constructor(angles = 1) {
		this.angles = angles;
		this.abstract = true;
	}
	getInfo() { return {angles: this.angles, abstract: this.abstract}; }
}

class Triangle extends Figure {
	constructor(angles, name = 'triangle') {
		super(angles);
		this.name = name;
		this.abstract = false;
	}
	getInfo() {
		const props = super.getInfo();
		props.name = this.name;
		return props;
	}
}

//5
class Table {
	constructor(x = 3, y = 3) {
		this.x = x;
		this.y = y;
		this.saveText = {};
	}
	getCell() { return this.x * this.y; }

	setText(x, y, text) {
		return x > this.x || y > this.y ? 'Error' : this.saveText[x + '' + y] = text;
	}

	getText(x, y) { return this.saveText[x + '' + y]; }

	getInfo() { return {cell: this.getCell(), x: this.x, y: this.y}; }

	static getCell(x, y) { return x * y; }
}

//6
class NameTable extends Table {
	constructor(x, y, name = 'table') {
		super(x, y);
		this.name = name;
	}
	getInfo() { return {...super.getInfo(), name: this.name}; }
	editName(name) { this.name = name; }
}