import readFile from './utils/file';
// import drawMap from './utils/helper';
import { MarsPosition, Movement, Orientation, Robot } from './types';

export default class Mars {
  // Saving map in format Y,X coordinates
  map: number[][];

  // X size in 0 index
  x: number;

  // Y size in 0 index
  y: number;

  // Input stored robots
  robots: Robot[];

  constructor(input: string) {
    const file: string = readFile(input);

    // Parse instructions from file
    const instructions = file.split('\n');

    // Read and store instructions
    this.loadMap(instructions.shift());
    this.loadRobots(instructions);
  }

  loadMap(firstLine: string): void {
    const mapSize: string[] = firstLine.split(' ');
    this.x = parseInt(mapSize[0], 10);
    this.y = parseInt(mapSize[1], 10);

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

      const position: MarsPosition = {
        x: parseInt(params[0], 10),
        y: parseInt(params[1], 10),
        // cast head orientation to typed orientation enum
        head: (<any>Orientation)[params[2]],
        alive: true,
      };

      const robot: Robot = {
        initialPosition: position,
        actualPosition: { ...position, alive: true },
        // cast every instruction movement to typed movement enum
        instructions: orders.map((e) => (<any>Movement)[e]),
      };

      this.robots.push(robot);
      iterator = iterator.slice(2);
    }
  }

  // introduce desired Mars coords, I will save it in my map as toMarsCoords
  toMarsCoordinates(coords: {
    x: number;
    y: number;
  }): { x: number; y: number } {
    // Origin is bottom-left, maxvalue is top-right
    return { y: this.y - coords.y, x: coords.x };
  }
    return { y: this.y - y, x };

  checkBoundings(x: number, y: number) {
    // checks if coords are valid, inside map
    let value = true;
    if (x > this.x || x < 0 || y < 0 || y > this.y) {
      value = false;
    }

    return value;
  }

    }
  }

  // executeNextMovement(move: Movement) {}
}
