const fs = require('file-system');

const date = new Date().toLocaleString();

fs.mkdirSync('datePath');
fs.writeFileSync('datePath/dateNow.txt', date);