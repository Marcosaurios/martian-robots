import { readFile } from '../src/utils/file';
import Mars from '../src/mars';
// import drawMap from '../src/utils/helper';

describe('startExploration with example files', () => {
  test('example given should be expected', () => {
    const input = readFile('examples/ex1_input.txt');
    const mars = new Mars(input);
    mars.startExploration();

    // drawMap(mars.map);

    const expected = readFile('examples/ex1_output.txt');
    expect(mars.getOutput()).toBe(expected);
  });
  test('example 2 should be expected', () => {
    const input = readFile('examples/ex2_input.txt');
    const mars = new Mars(input);
    mars.startExploration();

    // drawMap(mars.map);

    const expected = readFile('examples/ex2_output.txt');
    expect(mars.getOutput()).toBe(expected);
  });
  test('example 3 should be expected', () => {
    const input = readFile('examples/ex3_input.txt');
    const mars = new Mars(input);
    mars.startExploration();

    // drawMap(mars.map);

    const expected = readFile('examples/ex3_output.txt');
    expect(mars.getOutput()).toBe(expected);
  });
});
