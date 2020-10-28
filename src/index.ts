// Entry point of the program
import initCheck from './utils/init';
import Mars from './mars';

function main() {
  // Sanitize input and output
  const { input, output } = initCheck();

  console.log('Input is ', input);
  console.log('Output is ', output);

  // eslint-disable-next-line no-unused-vars
  const planet = new Mars(input);

  console.log(planet);

  // Initialize map

  // logic

  // output
}

main();
