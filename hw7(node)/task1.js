let date = new Date();
let pathFile = process.argv[1];
let file = pathFile.match(/\w+(\.\w+)?\.js/);
console.log(date.getHours(), date.getMinutes(), date.getDate(), date.getMonth() + 1, date.getFullYear(), file[0])
