import { readFile } from '../src/utils/file';
import Mars from '../src/mars';
// import drawMap from '../src/utils/helper';

describe('startExploration with example files', () => {
  test('example given should be expected', () => {
    const mars = new Mars('examples/ex1_input.txt');
    mars.startExploration();

    // drawMap(mars.map);

    const expected = readFile('examples/ex1_output.txt');
    expect(mars.getOutput()).toBe(expected);
  });
  test('example 2 should be expected', () => {
    const mars = new Mars('examples/ex2_input.txt');
    mars.startExploration();

    // drawMap(mars.map);

    const expected = readFile('examples/ex2_output.txt');
    expect(mars.getOutput()).toBe(expected);
  });
  test('example 3 should be expected', () => {
    const mars = new Mars('examples/ex3_input.txt');
    mars.startExploration();

    // drawMap(mars.map);

    const expected = readFile('examples/ex3_output.txt');
    expect(mars.getOutput()).toBe(expected);
  });
});
