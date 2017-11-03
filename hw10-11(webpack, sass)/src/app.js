const header = require('./modules/header/header')();
const footer = require('./modules/footer/footer')();
const main = require('./modules/main/main')();

const $ = require('jquery');

$('body').append(header);
$('body').append(main);
$('body').append(footer);