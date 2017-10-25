const fs = require('file-system');

const date = new Date().toLocaleString();

fs.mkdir('datePath');
fs.writeFile('datePath/dateNow.txt', date);