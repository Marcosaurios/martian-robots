// Entry point of the program
import initCheck from './utils/init';
import readFile from './utils/file';

function main() {
  // Sanitize input and output
  const { input, output } = initCheck(process.argv.slice(2));

  console.log('Input is ', input);
  console.log('Output is ', output);

  const file = readFile(input);

  console.log(file);

  // Initialize map

  // logic

  // output
}

main();
