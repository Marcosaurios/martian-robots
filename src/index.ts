// Entry point of the program
import initCheck from './utils/init';
import Mars from './mars';

function main() {
  // Sanitize input and output
  // eslint-disable-next-line no-unused-vars
  const { input /* , output */ } = initCheck();

  const planet = new Mars(input);
  planet.startExploration();

  console.log(planet.getOutput());
}

main();
