import Rover from './marsRover';

class Map {

  rovers : Array<Rover>;
  rover: Rover;
  xMax : number;
  yMax : number;

  constructor(xMax, yMax){
    this.xMax = xMax;
    this.yMax = yMax;
    this.rovers = [];
  }

  addRover(x, y, compass){
      if(x > this.xMax || y > this.yMax || x < 0 || y < 0){
        console.log("Rover positions are out of range");
        return false;
      }
      if(this.rovers){
        for(let rover of this.rovers){
          if(rover.pos.x == x && rover.pos.y == y){
            console.log("A Rover is already standing on this position.")
            return false;
          }
        }
      }
      this.rover = new Rover(x,y,compass);
      console.log(this.rover.getPosition())
      this.rovers.push(this.rover);
      console.log("Rover added");
  }

  execute(c){
    let char = c.split('',c.length);
    for(let cmd of char){
      if(this.rover){
        this.rover.execute(this.xMax, this.yMax, cmd);
      }
    }
  }

  print(){
    if(this.rovers){
      for(let rover of this.rovers){
        console.log(rover.pos.x, rover.pos.y, rover.compass);
        return rover.pos.x, rover.pos.y, rover.compass;

      }
    }
  }

  getRoverPos(){
    return this.rover.pos;
  }
  getRoverCompass(){
    return this.rover.compass;
  }
}
export default Map;
