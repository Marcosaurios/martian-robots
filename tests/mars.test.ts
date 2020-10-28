import Mars from '../src/mars';
import { Robot } from '../src/types';

describe('load map', () => {
  test('should load map without errors and as expected', () => {
    const mars = new Mars('input.txt');

    const expected = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    expect(mars.map).toEqual(expected);
    expect(mars.size).toMatchObject([5, 3]);
  });

  // test load robots
  test('should cast robots without errors and as expected', () => {
    const mars = new Mars('input.txt');

    const robots: Robot[] = [
      {
        initialPosition: { x: 1, y: 1, head: 1 },
        instructions: [1, 0, 1, 0, 1, 0, 1, 0],
      },
      {
        initialPosition: { x: 3, y: 2, head: 0 },
        instructions: [0, 1, 1, 0, 2, 2, 0, 0, 1, 1, 0, 2, 2],
      },
      {
        initialPosition: { x: 0, y: 3, head: 3 },
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
    expect(mars.size).toMatchObject([5, 3]);

    // Origin is bottom-left
    expect(mars.toMarsCoordinates(0, 0)).toMatchObject({
      x: 0,
      y: 2,
    });

    // MaxValue is top-right
    expect(mars.toMarsCoordinates(2, 4)).toMatchObject({
      x: 4,
      y: 0,
    });
  });
});
