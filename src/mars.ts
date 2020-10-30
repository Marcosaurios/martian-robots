import readFile from './utils/file';
// import drawMap from './utils/helper';
import { MarsPosition, Movement, Orientation, Robot } from './types';
import Controls from './controls';

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
        actualPosition: { ...position },
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

  startExploration() {
    // Start reading robots
    for (let i = 0; i < this.robots.length; i += 1) {
      const robot = this.robots[i];
      const startingPos = this.checkBoundings(robot.initialPosition);

      // Invalid initial position
      if (!startingPos) {
        this.robots[i].actualPosition.alive = false;
        continue;
      }

      // Start reading instructions
      const { instructions } = robot;
      for (let j = 0; j < instructions.length; j += 1) {
        const move = instructions[j];
        const gridPos = this.toMarsCoordinates({
          x: robot.actualPosition.x,
          y: robot.actualPosition.y,
        });

        // if robot is going to die
        if (!this.checkBoundings(Controls[move](robot.actualPosition))) {
          // if actual pos is an scent, skip movement
          if (this.map[gridPos.y][gridPos.x] === 1) {
            continue;
          } else {
            // robot is dead
            this.robots[i] = this.killRobot(robot);
            break;
          }
        } else {
          // move normally
          this.robots[i].actualPosition = Controls[move](robot.actualPosition);
        }
      }
    }
  }

  checkBoundings(pos: MarsPosition): boolean {
    // checks if coords are valid, inside map
    let value: boolean = true;
    if (pos.x > this.x || pos.x < 0 || pos.y < 0 || pos.y > this.y) {
      value = false;
    }

    return value;
  }

  killRobot(robot: Robot): Robot {
    // create deep copy
    const deadRobot: Robot = {
      ...robot,
      actualPosition: {
        ...robot.actualPosition,
        alive: false,
      },
    };

    const gridPos = this.toMarsCoordinates({
      x: deadRobot.actualPosition.x,
      y: deadRobot.actualPosition.y,
    });

    // set scent in map
    this.map[gridPos.y][gridPos.x] = 1;

    return deadRobot;
  }

  getOutput(): string {
    let output = '';
    for (let i = 0; i < this.robots.length; i += 1) {
      const robot = this.robots[i].actualPosition;
      output += `${robot.x} ${robot.y} ${Orientation[robot.head]}${
        robot.alive ? '' : ' LOST'
      }`;
      if (i !== this.robots.length - 1) {
        output += '\n';
      }
    }
    return output;
  }
}
