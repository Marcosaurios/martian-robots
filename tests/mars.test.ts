import Mars from '../src/mars';
import { Robot } from '../src/types';

describe('load input', () => {
  test('should load map without errors and as expected', () => {
    const mars = new Mars('input.txt');

    const expected = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];

    expect(mars.map).toEqual(expected);
    expect(mars.x).toEqual(5);
    expect(mars.y).toEqual(3);
  });

  test('should cast robots without errors and as expected', () => {
    const mars = new Mars('input.txt');

    const robots: Robot[] = [
      {
        initialPosition: { x: 1, y: 1, head: 1, alive: true },
        actualPosition: { x: 1, y: 1, head: 1, alive: true },
        instructions: [1, 0, 1, 0, 1, 0, 1, 0],
      },
      {
        initialPosition: { x: 3, y: 2, head: 0, alive: true },
        actualPosition: { x: 3, y: 2, head: 0, alive: true },
        instructions: [0, 1, 1, 0, 2, 2, 0, 0, 1, 1, 0, 2, 2],
      },
      {
        initialPosition: { x: 0, y: 3, head: 3, alive: true },
        actualPosition: { x: 0, y: 3, head: 3, alive: true },
        instructions: [2, 2, 0, 0, 0, 2, 0, 2, 0, 2],
      },
    ];

    for (let i = 0; i < mars.robots.length; i++) {
      expect(typeof mars.robots[i].initialPosition.x).toBe('number');
      expect(typeof mars.robots[i].initialPosition.y).toBe('number');
      expect(typeof mars.robots[i].initialPosition.head).toBe('number');
    }

    expect(mars.robots).toMatchObject(robots);
  });

  test('should use bottom-left as origin coordinates', () => {
    const mars = new Mars('input.txt');
    expect(mars.x).toEqual(5);
    expect(mars.y).toEqual(3);

    // Origin is bottom-left
    expect(mars.toMarsCoordinates({ y: 0, x: 0 })).toMatchObject({
      x: 0,
      y: 3,
    });

    // MaxValue is top-right
    expect(mars.toMarsCoordinates({ y: 3, x: 5 })).toMatchObject({
      x: 5,
      y: 0,
    });
  });

  test('should explore example as expected', () => {
    const mars = new Mars('input.txt');

    mars.startExploration();

    const expected: Robot[] = [
      {
        initialPosition: { x: 1, y: 1, head: 1, alive: true },
        actualPosition: { x: 1, y: 1, head: 1, alive: true },
        instructions: [1, 0, 1, 0, 1, 0, 1, 0],
      },
      {
        initialPosition: { x: 3, y: 2, head: 0, alive: true },
        actualPosition: { x: 3, y: 3, head: 0, alive: false },
        instructions: [0, 1, 1, 0, 2, 2, 0, 0, 1, 1, 0, 2, 2],
      },
      {
        initialPosition: { x: 0, y: 3, head: 3, alive: true },
        actualPosition: { x: 2, y: 3, head: 2, alive: true },
        instructions: [2, 2, 0, 0, 0, 2, 0, 2, 0, 2],
      },
    ];

    for (let i = 0; i < expected.length; i++) {
      expect(mars.robots[i]).toEqual(expected[i]);
    }
  });
});
