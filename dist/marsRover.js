"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarsRover = /** @class */ (function () {
    function MarsRover(x, y, compass) {
        this.compass = compass;
        this.pos = { x: x, y: y };
        this.nextPos = this.pos;
    }
    ;
    MarsRover.prototype.execute = function (xMax, yMax, c) {
        if (c == 'L' || c == 'R') {
            this.rotate(this.compass, c);
        }
        if (c == 'M') {
            this.move(this.compass);
            if (this.nextPos.x <= xMax && this.nextPos.y <= yMax && this.nextPos.x >= 0 && this.nextPos.y >= 0) {
                return this.pos = this.nextPos;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    MarsRover.prototype.getPosition = function () {
        return { pos: this.pos, compass: this.compass };
    };
    MarsRover.prototype.move = function (compass) {
        switch (compass) {
            case ('N'): {
                return this.nextPos.y += 1;
            }
            case ('E'): {
                return this.nextPos.x += 1;
            }
            case ('S'): {
                return this.nextPos.y -= 1;
            }
            case ('W'): {
                return this.nextPos.x -= 1;
            }
        }
    };
    MarsRover.prototype.rotate = function (compass, c) {
        switch (compass) {
            case ('N'): {
                if (c == 'L') {
                    return this.compass = 'W';
                }
                if (c == 'R') {
                    return this.compass = 'E';
                }
            }
            case ('E'): {
                if (c == 'L') {
                    return this.compass = 'N';
                }
                if (c == 'R') {
                    return this.compass = 'S';
                }
            }
            case ('S'): {
                if (c == 'L') {
                    return this.compass = 'E';
                }
                if (c == 'R') {
                    return this.compass = 'W';
                }
            }
            case ('W'): {
                if (c == 'L') {
                    return this.compass = 'S';
                }
                if (c == 'R') {
                    return this.compass = 'N';
                }
            }
        }
    };
    return MarsRover;
}());
exports.default = MarsRover;
//# sourceMappingURL=marsRover.js.map