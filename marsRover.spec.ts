import MarsRover from './marsRover';
import { expect } from 'chai';
import 'mocha';

describe('Rover', function() {
  it('Should return false after wrong command', function(){
    let rover = new MarsRover(1,2, 'N');

    expect(rover.execute(5,5,'S')).to.eql(false);
  });

  it('Should return right command {W}', function(){
    let rover = new MarsRover(1,2, 'N');
    rover.execute(5,5,'L')
    expect(rover.compass).to.eql('W');
  });

  it('Should return right pos after M : {1,3}', function(){
    let rover = new MarsRover(1,2, 'N');
    rover.execute(5,5,'M')
    expect(rover.pos.x).to.eql(1);
    expect(rover.pos.y).to.eql(3);
  });

  it('Should return false because out of bounds', function(){
    let rover = new MarsRover(0,0, 'S');
    rover.execute(5,5,'M');
    expect(rover.execute(5,5,'M')).to.eql(false);
  });

  it('Should return right compass after L', function(){
    let rover = new MarsRover(1,2, 'E');
    rover.execute(5,5,'L')
    expect(rover.compass).to.eql('N');
  });
});
