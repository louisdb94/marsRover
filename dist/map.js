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
            //For loop
            // for(let rover of this.rovers){
            //   if(rover.pos.x == x && rover.pos.y == y){
            //     console.log("A Rover is already standing on this position.")
            //     return false;
            //   }
            // }
            //ForEach
            // this.rovers.forEach((item) => {
            //   if(item.pos.x == x && item.pos.y == y){
            //     console.log("A Rover is already standing on this position.")
            //     return false;
            //   }
            // });
            //Filter
            /** Returns undefined if array is empty */
            this.rovers.filter(function (item) {
                if (item.pos.x == x && item.pos.y == y) {
                    console.log("A Rover is already standing on this position.");
                }
            });
        }
        this.rover = new marsRover_1.default(x, y, compass);
        console.log(this.rover.getPosition());
        this.rovers.push(this.rover);
        console.log("Rover added");
    };
    Map.prototype.execute = function (c) {
        var _this = this;
        var char = c.split('', c.length);
        // for(let cmd of char){
        //   if(this.rover){
        //     this.rover.execute(this.xMax, this.yMax, cmd);
        //   }
        // }
        //Map
        char.map(function (cmd) {
            if (_this.rover) {
                _this.rover.execute(_this.xMax, _this.yMax, cmd);
            }
        });
    };
    Map.prototype.print = function () {
        if (this.rovers) {
            // for(let rover of this.rovers){
            //   console.log(rover.pos.x, rover.pos.y, rover.compass);
            //   // return rover.pos.x, rover.pos.y, rover.compass;
            //
            // }
            //ForEach
            this.rovers.forEach(function (rover) {
                console.log(rover.pos.x, rover.pos.y, rover.compass);
            });
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