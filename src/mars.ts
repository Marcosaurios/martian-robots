import readFile from './utils/file';
// import drawMap from './utils/helper';
import { Movement, Orientation, Robot } from './types';

export default class Mars {
  // Saving map in format Y,X coordinates
  map: number[][];

  // X size in 0 index
  x: number;

  // Y size in 0 index
  y: number;

  // Real size
  size: number[];

  // Input stored robots
  robots: Robot[];

  constructor(input: string) {
    const file: string = readFile(input);

    // Parse instructions from file
    const instructions = file.split('\n');

    // Read and store instructions
    this.loadMap(instructions.shift());
    this.loadRobots(instructions);

    // this.
  }

  loadMap(firstLine: string): void {
    const mapSize: string[] = firstLine.split(' ');
    this.x = parseInt(mapSize[0], 10) - 1;
    this.y = parseInt(mapSize[1], 10) - 1;
    this.size = [this.x + 1, this.y + 1];

    const map: number[][] = [...Array(this.y + 1)].map(() =>
      Array(this.x + 1).fill(0),
    );

    this.map = map;
  }

  loadRobots(instructions: string[]): void {
    let iterator = instructions;
    this.robots = [];

    while (iterator.length > 0) {
      const params = iterator[0].split(' ');
      const orders = iterator[1].split('');

      const robot: Robot = {
        initialPosition: {
          x: parseInt(params[0], 10),
          y: parseInt(params[1], 10),
          // cast head orientation to typed orientation enum
          head: (<any>Orientation)[params[2]],
        },
        // cast every instruction movement to typed movement enum
        instructions: orders.map((e) => (<any>Movement)[e]),
      };

      this.robots.push(robot);
      iterator = iterator.slice(2);
    }
  }

  toMarsCoordinates(y: number, x: number): { x: number; y: number } {
    // Origin is bottom-left, maxvalue is top-right
    return { y: this.y - y, x };
  }
}

/* function readInstructions(input: string) {
  // load Map
  // load Robots
}
 */
// do logic
