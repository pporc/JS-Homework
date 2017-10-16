//1
function* getValue(number) {
	let value = number,
			maxNumber = 1000000000;

	while (value < maxNumber) {
    value *= number;
    if (value > maxNumber) throw 'Value is too big!';
    yield value;
  }
}

//2
function* createSeconds() {
	while (true) {
		let date = new Date();
		yield Math.floor(date.getSeconds() / 10) * 10;
	}
}