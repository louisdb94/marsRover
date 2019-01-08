"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("./map");
var args = process.argv.slice(2);
// console.log(args[0]);
// console.log(args[1]);
// console.log(args);
var map;
if (args == null) {
    map = new map_1.default(args[0], args[1]);
    map.addRover(args[2], args[3], args[4]);
}
else {
    map = new map_1.default(5, 5);
    map.addRover(1, 2, 'N');
}
map.execute('LMLMLMLMM');
map.addRover(3, 3, 'E');
map.execute('MMRMMRMRRM');
map.print();
//# sourceMappingURL=app.js.map