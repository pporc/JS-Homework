const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];

const getDay = () => {
  return new Date().getDay();
};
 
const getAdultUsers = (users = []) => users.filter(user => user.age > 18);
 
const getRandomUsers = (users) => {
  const numb = Math.random();
 
  if (!users) {
    return false;
  }
 
  const length = users.length;
  const middleUser = Math.round(length / 2);
 
  if (numb > 0.5) {
    return users.slice(0, middleUser);
  }
 
  return users.slice(middleUser, length);
};

// testing

const testObj = {
  equal(result) {
    if (this.input === result) console.log('Success'); 
    else console.error(`${this.input} not equals to ${result}` );
  },
  defined() {
    if (this.input !== undefined) console.log('Success'); 
    else console.error(`${this.input} is not defined` );
  },
  isArray() {
    if (Array.isArray(this.input)) console.log('Success'); 
    else console.error(`${this.input} is not Array` );
  },
  equalArray(result) {
    if (JSON.stringify(this.input) === JSON.stringify(result)) console.log('Success'); 
    else console.error(`${this.input} not equals to ${result}` );
  }
}

const test = (input) => {
  testObj.input = input;
  return testObj;
};

// getDay
const dateNow = new Date().getDay();
test(getDay()).equal(dateNow);

// getAdultUsers
test(getAdultUsers([ {age: 18}, {age: 14}, {age: 28}, {age: 54} ])).equalArray([{age: 28}, {age: 54}]);
test(getAdultUsers()).isArray();

// getRandomUsers
const originRandom = Math.random;

// test1
Math.random = () => 0.5;
test(getRandomUsers([ {age: 18}, {age: 14}, {age: 28}, {age: 54} ])).equalArray([ { age: 28 }, { age: 54 } ]);
// test2
Math.random = () => 0.7;
test(getRandomUsers([ {age: 18}, {age: 14}, {age: 28}, {age: 54} ])).equalArray([ { age: 18 }, { age: 14 } ]);
// test3
test(getRandomUsers()).equal(false);

Math.random = originRandom;
