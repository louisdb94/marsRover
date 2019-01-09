#!/usr/bin/env node

const inquirer = require('inquirer');


let question = [{type: 'input', name: 'key', message: 'Enter your name'}];
// let answers = inquirer.prompt(question).then(answers => {
//   console.log(answers);
//
// });

let answers = inquirer.prompt(question).then(answers => console.log(answers.key));
// console.log(answers);
