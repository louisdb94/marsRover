"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("./map");
var inquirer = require("inquirer");
// const args = process.argv.slice(2);
//
// // console.log(args[0]);
// // console.log(args[1]);
// // console.log(args);
//
// let map;
// if(args == null){
//   map = new Map(args[0],args[1]);
//   map.addRover(args[2],args[3],args[4]);
//
// }else{
//   map = new Map(5,5);
//   map.addRover(1,2,'N');
// }
//
// map.execute('LMLMLMLMM');
// //print
// map.addRover(3,3,'E');
// map.execute('MMRMMRMRRM');
// map.print();
// let map = new Map(5,5);
// map.addRover(1,2,'N');
// map.execute('LMLMLMLMM');
// map.print();
var question = [
    { type: 'input', name: 'xMax', message: 'Enter xMax: ' },
    { type: 'input', name: 'yMax', message: 'Enter yMax: ' },
    { type: 'input', name: 'rovPosX', message: 'Enter the x position of the rover: ' },
    { type: 'input', name: 'rovPosY', message: 'Enter the y position of the rover: ' },
    { type: 'input', name: 'rovCompass', message: 'Enter the compass direction of the rover: ' }
];
var map;
var answers = inquirer.prompt(question).then(function (answers) {
    map = new map_1.default(answers.xMax, answers.yMax);
    map.addRover(answers.rovPosX, answers.rovPosY, answers.rovCompass);
    map.execute('LMLMLMLMM');
    map.print();
});
//# sourceMappingURL=app.js.map