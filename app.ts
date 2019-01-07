import Map from './map';

//MAIN
// execution of all the functions and methods.

//create a map
let map = new Map(5,5);
//add a rover
map.addRover(1,2,'N');
//excetute the rover with the commands
map.execute('LMLMLMLMM');
//print
map.print();
map.addRover(3,3,'E');
map.execute('MMRMMRMRRM');
map.print();
map.addRover(1,3,'N');
