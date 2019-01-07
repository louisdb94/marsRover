"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("./map");
var chai_1 = require("chai");
require("mocha");
describe('Map', function () {
    it('Should print following positions', function () {
        var map = new map_1.default(5, 5);
        //add a rover
        map.addRover(1, 2, 'N');
        //execute the rover with the commands
        map.execute('LMLMLMLMM');
        chai_1.expect(map.getRoverPos()).to.eql({ x: 1, y: 3 });
    });
    it('Should print following compass', function () {
        var map = new map_1.default(5, 5);
        //add a rover
        map.addRover(1, 2, 'N');
        //execute the rover with the commands
        map.execute('LMLMLMLMM');
        chai_1.expect(map.getRoverCompass()).to.eql('N');
    });
    it('Should print following positions', function () {
        var map = new map_1.default(5, 5);
        //add a rover
        map.addRover(3, 3, 'E');
        //execute the rover with the commands
        map.execute('MMRMMRMRRM');
        chai_1.expect(map.getRoverPos()).to.eql({ x: 5, y: 1 });
    });
    it('Should print following compass', function () {
        var map = new map_1.default(5, 5);
        //add a rover
        map.addRover(3, 3, 'E');
        //execute the rover with the commands
        map.execute('MMRMMRMRRM');
        chai_1.expect(map.getRoverCompass()).to.eql('E');
    });
    it('Should not add a rover because of similar positions', function () {
        var map = new map_1.default(5, 5);
        //add a rover
        map.addRover(3, 3, 'E');
        map.addRover(3, 3, 'E');
        chai_1.expect(map.addRover(3, 3, 'E')).to.eql(false);
    });
});
//# sourceMappingURL=map.spec.js.map