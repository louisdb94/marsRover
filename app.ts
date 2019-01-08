import Map from './map';

const args = process.argv.slice(2);
// console.log(args[0]);
// console.log(args[1]);
// console.log(args);

let map;
if(args == null){
  map = new Map(args[0],args[1]);
  map.addRover(args[2],args[3],args[4]);

}else{
  map = new Map(5,5);
  map.addRover(1,2,'N');
}

map.execute('LMLMLMLMM');
map.addRover(3,3,'E');
map.execute('MMRMMRMRRM');
map.print();
