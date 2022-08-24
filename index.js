import greet from'./module.js';

import chalk from 'chalk';

const log = console.log;
// Formatting using chalk


// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// everyday fun
import fun from "everyday-fun";
console.log(fun.getRandomQuote());

// figlet
import figlet from "figlet";
figlet('Coding is fun...', function(err, result) {
    console.log(result);
});

// import
// require
//const basicMaths = require("basic-maths");
import basicMaths from 'basic-maths';

// methods
const add = basicMaths.add(1, 3); // return 4

const substract = basicMaths.substract(1, 2); // return -1

const multiply = basicMaths.multiply(1, 2); // return 2

const divideGood = basicMaths.divide(1, 2); // Good - return 0.5

const powOperation = basicMaths.powOperation(2, 2); // return 8




//console.log(greet('Samke'));
//console.log(greet('Paula'));
