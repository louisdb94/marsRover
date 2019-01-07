import Map from './map';

class MarsRover {
  compass: string;
  pos: any;
  nextPos: {x: number, y: number};

  constructor(x:number,y:number,compass: string){
    this.compass = compass;
    this.pos = {x,y};
    this.nextPos = this.pos;
  };

  execute(xMax, yMax, c){
    if(c == 'L' || c == 'R'){
      this.rotate(this.compass, c);
    }
    if(c == 'M'){
      this.move(this.compass);
      if(this.nextPos.x <= xMax && this.nextPos.y <= yMax && this.nextPos.x >= 0 && this.nextPos.y >= 0 ){
        return this.pos = this.nextPos;
      }
      else{ return false;}
    }
    else{
      return false;
    }
  }
  getPosition(){
    return { pos: this.pos, compass: this.compass};
  }

  move(compass){
    switch(compass) {
      case ('N') :{
        return this.nextPos.y += 1;
      }
      case ('E') :{
        return this.nextPos.x += 1;
      }
      case ('S') :{
        return this.nextPos.y -= 1;
      }
      case ('W') :{
        return this.nextPos.x -= 1;
      }
    }
  }

  rotate(compass, c){
    switch(compass) {
      case ('N') :{
        if(c == 'L'){return this.compass = 'W'}
        if(c == 'R'){return this.compass = 'E'}
      }
      case ('E') :{
        if(c == 'L'){return this.compass = 'N'}
        if(c == 'R'){return this.compass = 'S'}
      }
      case ('S') :{
        if(c == 'L'){return this.compass = 'E'}
        if(c == 'R'){return this.compass = 'W'}
      }
      case ('W') :{
        if(c == 'L'){return this.compass = 'S'}
        if(c == 'R'){return this.compass = 'N'}
      }
    }
  }
}

export default MarsRover;
