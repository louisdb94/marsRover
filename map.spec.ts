import Map from './map';
import { expect } from 'chai';
import 'mocha';

describe('Map', function() {
  it('Should print following positions', function(){
    let map = new Map(5,5);
    //add a rover
    map.addRover(1,2,'N');
    //execute the rover with the commands
    map.execute('LMLMLMLMM');

    expect(map.getRoverPos()).to.eql({x: 1, y: 3});
  });

  it('Should print following compass', function(){
    let map = new Map(5,5);
    //add a rover
    map.addRover(1,2,'N');
    //execute the rover with the commands
    map.execute('LMLMLMLMM');

    expect(map.getRoverCompass()).to.eql('N');
  });

  it('Should print following positions', function(){
    let map = new Map(5,5);
    //add a rover
    map.addRover(3,3,'E');
    //execute the rover with the commands
    map.execute('MMRMMRMRRM');

    expect(map.getRoverPos()).to.eql({x: 5, y: 1});
  });

  it('Should print following compass', function(){
    let map = new Map(5,5);
    //add a rover
    map.addRover(3,3,'E');
    //execute the rover with the commands
    map.execute('MMRMMRMRRM');

    expect(map.getRoverCompass()).to.eql('E');
  });

  it('Should not add a rover because of similar positions', function(){
    let map = new Map(5,5);
    //add a rover
    map.addRover(3,3,'E');
    map.addRover(3,3,'E');

    expect(map.addRover(3,3,'E')).to.eql(false);
  });

});
