// Entry point of the program
import initCheck from './utils/init';
import readInstructions from './mars';

function main() {
  // Sanitize input and output
  const { input, output } = initCheck();

  console.log('Input is ', input);
  console.log('Output is ', output);

  readInstructions(input);

  // Initialize map

  // logic

  // output
}

main();
