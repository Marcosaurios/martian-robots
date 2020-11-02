import Controls from '../src/controls';
import Mars from '../src/mars';
import { MarsPosition, Movement, Orientation, Robot } from '../src/types';
import { readFile } from '../src/utils/file';

describe('movements: should check next invalid movement successfuly', () => {
  test('checkBoundings invalid next position top-right', () => {
    const input = readFile('input.txt');
    const mars = new Mars(input);
    // size of 5,3

    const move: Movement = Movement.F;
    const actualPosition: MarsPosition = {
      x: 5,
      y: 3,
      head: Orientation.N,
      alive: true,
    };

    expect(mars.checkBoundings(Controls[move](actualPosition))).toEqual(false);
  });
  test('checkBoundings invalid next position top-left', () => {
    const input = readFile('input.txt');
    const mars = new Mars(input);
    // size of 5,3

    const move: Movement = Movement.F;
    const actualPosition: MarsPosition = {
      x: 0,
      y: 3,
      head: Orientation.W,
      alive: true,
    };

    expect(mars.checkBoundings(Controls[move](actualPosition))).toEqual(false);
  });
  test('checkBoundings invalid next position bottom-left', () => {
    const input = readFile('input.txt');
    const mars = new Mars(input);
    // size of 5,3

    const move: Movement = Movement.F;
    const actualPosition: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.S,
      alive: true,
    };

    expect(mars.checkBoundings(Controls[move](actualPosition))).toEqual(false);
  });
  test('checkBoundings invalid next position bottom-right', () => {
    const input = readFile('input.txt');
    const mars = new Mars(input);
    // size of 5,3

    const move: Movement = Movement.F;
    const actualPosition: MarsPosition = {
      x: 5,
      y: 0,
      head: Orientation.E,
      alive: true,
    };

    expect(mars.checkBoundings(Controls[move](actualPosition))).toEqual(false);
  });
});

describe('movements: should check next valid movement successfuly', () => {
  test('checkBoundings valid next position bottom-left', () => {
    const input = readFile('input.txt');
    const mars = new Mars(input);
    // size of 5,3

    const move: Movement = Movement.F;
    const actualPosition: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.N,
      alive: true,
    };

    expect(mars.checkBoundings(Controls[move](actualPosition))).toEqual(true);
  });
});

describe('movements: killRobot should kill the robot', () => {
  test('should be killed when moving out of bounds 0,0,S move F', () => {
    const input = readFile('input.txt');
    const mars = new Mars(input);
    // size of 5,3

    const robot: Robot = {
      initialPosition: {
        x: 0,
        y: 0,
        head: Orientation.S,
        alive: true,
      },
      actualPosition: {
        x: 0,
        y: 0,
        head: Orientation.S,
        alive: true,
      },
      instructions: [],
    };

    const expected: Robot = {
      initialPosition: {
        x: 0,
        y: 0,
        head: Orientation.S,
        alive: true,
      },
      actualPosition: {
        x: 0,
        y: 0,
        head: Orientation.S,
        alive: false,
      },
      instructions: [],
    };

    expect(mars.killRobot(robot)).toEqual(expected);
  });
  test('should be killed when moving out of bounds 0,0,S move F', () => {
    const input = readFile('input.txt');
    const mars = new Mars(input);
    // size of 5,3

    const robot: Robot = {
      initialPosition: {
        x: 5,
        y: 3,
        head: Orientation.N,
        alive: true,
      },
      actualPosition: {
        x: 5,
        y: 3,
        head: Orientation.N,
        alive: true,
      },
      instructions: [],
    };

    const expected: Robot = {
      initialPosition: {
        x: 5,
        y: 3,
        head: Orientation.N,
        alive: true,
      },
      actualPosition: {
        x: 5,
        y: 3,
        head: Orientation.N,
        alive: false,
      },
      instructions: [],
    };

    expect(mars.killRobot(robot)).toEqual(expected);
  });
});
