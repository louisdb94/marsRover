"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var marsRover_1 = require("./marsRover");
var Map = /** @class */ (function () {
    function Map(xMax, yMax) {
        this.xMax = xMax;
        this.yMax = yMax;
        this.rovers = [];
    }
    Map.prototype.addRover = function (x, y, compass) {
        if (x > this.xMax || y > this.yMax || x < 0 || y < 0) {
            console.log("Rover positions are out of range");
            return false;
        }
        if (this.rovers) {
            for (var _i = 0, _a = this.rovers; _i < _a.length; _i++) {
                var rover = _a[_i];
                if (rover.pos.x == x && rover.pos.y == y) {
                    console.log("A Rover is already standing on this position.");
                    return false;
                }
            }
        }
        this.rover = new marsRover_1.default(x, y, compass);
        console.log(this.rover.getPosition());
        this.rovers.push(this.rover);
        console.log("Rover added");
    };
    Map.prototype.execute = function (c) {
        var char = c.split('', c.length);
        for (var _i = 0, char_1 = char; _i < char_1.length; _i++) {
            var cmd = char_1[_i];
            if (this.rover) {
                this.rover.execute(this.xMax, this.yMax, cmd);
            }
        }
    };
    Map.prototype.print = function () {
        if (this.rovers) {
            for (var _i = 0, _a = this.rovers; _i < _a.length; _i++) {
                var rover = _a[_i];
                console.log(rover.pos.x, rover.pos.y, rover.compass);
                return rover.pos.x, rover.pos.y, rover.compass;
            }
        }
    };
    Map.prototype.getRoverPos = function () {
        return this.rover.pos;
    };
    Map.prototype.getRoverCompass = function () {
        return this.rover.compass;
    };
    return Map;
}());
exports.default = Map;
//# sourceMappingURL=map.js.map