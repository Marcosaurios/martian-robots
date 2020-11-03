import { writeFile } from './utils/file';
// import drawMap from './utils/helper';
import { MarsPosition, Movement, Orientation, Robot } from './types';
import Controls from './controls';

/**
 * Class to handle any Mars exploration.
 * @class Mars
 */
export default class Mars {
  /**
   * Where the map is saved, with the robot's scents. To store anything inside it's in format [Y][X] coordinates.
   * @type {number[][]}
   * @public
   */
  map: number[][];

  /**
   * X size of the map, in 0 index. Same value as given in the input file.
   * @type {number}
   * @public
   */
  x: number;

  /**
   * Y size of the map, in 0 index. Same value as given in the input file.
   * @type {number}
   * @public
   */
  y: number;

  /**
   * Robots of the actual map, given in the input.
   * @type {Robot[]}
   * @public
   */
  robots: Robot[];

  /**
   * @constructor
   * @param {string} input Should contain the file content (map information, robots and its instructions).
   */
  constructor(input: string) {
    // Parse instructions from file content
    const instructions = input.split('\n');

    this.loadMap(instructions.shift());
    this.loadRobots(instructions);
  }

  /**
   * Loads map data from the input inside our class.
   * @param {string} firstLine Defines the map size.
   * @public
   */
  loadMap(firstLine: string): void {
    const mapSize: string[] = firstLine.split(' ');
    this.x = parseInt(mapSize[0], 10);
    this.y = parseInt(mapSize[1], 10);

    const map: number[][] = [...Array(this.y + 1)].map(() =>
      Array(this.x + 1).fill(0),
    );

    this.map = map;
  }

  /**
   * Loads robots data from the input inside our class.
   * @param instructions Defines the robots and its instructions, separated line by line.
   * @public
   */
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

  /**
   * Converts the desired Mars coordinates, to our map.
   * @param { x: number, y: number} coords Desired Mars coordinates
   * @public
   */
  toMarsCoordinates(coords: {
    x: number;
    y: number;
  }): { x: number; y: number } {
    // Origin is bottom-left, maxvalue is top-right
    return { y: this.y - coords.y, x: coords.x };
  }

  /**
   * Executes exploration once map and robots are loaded.
   * @public
   */
  startExploration(): void {
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

  /**
   * Compares position against map limits to verify boundings.
   * @param {MarsPosition} pos Position to check
   * @public
   */
  checkBoundings(pos: MarsPosition): boolean {
    // checks if coords are valid, inside map
    let value: boolean = true;
    if (pos.x > this.x || pos.x < 0 || pos.y < 0 || pos.y > this.y) {
      value = false;
    }

    return value;
  }

  /**
   * Kills the given robot, and marks last position as a scent in the map.
   * @param {Robot} robot Robot to kill
   * @public
   */
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

  /**
   * Returns the exploration result in a string.
   * @public
   */
  getOutput(): string {
    let output: string = '';
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

  /**
   * Writes a file with the exploration result inside, in the given output.
   * @param outputPath Path to write the file.
   */
  writeOutput(outputPath: string): void {
    writeFile(this.getOutput(), outputPath);
  }
}
