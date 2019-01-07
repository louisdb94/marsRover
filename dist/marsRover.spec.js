"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marsRover_1 = require("./marsRover");
var chai_1 = require("chai");
require("mocha");
describe('Rover', function () {
    it('Should return false after wrong command', function () {
        var rover = new marsRover_1.default(1, 2, 'N');
        chai_1.expect(rover.execute(5, 5, 'S')).to.eql(false);
    });
    it('Should return right command {W}', function () {
        var rover = new marsRover_1.default(1, 2, 'N');
        rover.execute(5, 5, 'L');
        chai_1.expect(rover.compass).to.eql('W');
    });
    it('Should return right pos after M : {1,3}', function () {
        var rover = new marsRover_1.default(1, 2, 'N');
        rover.execute(5, 5, 'M');
        chai_1.expect(rover.pos.x).to.eql(1);
        chai_1.expect(rover.pos.y).to.eql(3);
    });
    it('Should return false because out of bounds', function () {
        var rover = new marsRover_1.default(0, 0, 'S');
        rover.execute(5, 5, 'M');
        chai_1.expect(rover.execute(5, 5, 'M')).to.eql(false);
    });
    it('Should return right compass after L', function () {
        var rover = new marsRover_1.default(1, 2, 'E');
        rover.execute(5, 5, 'L');
        chai_1.expect(rover.compass).to.eql('N');
    });
});
//# sourceMappingURL=marsRover.spec.js.map