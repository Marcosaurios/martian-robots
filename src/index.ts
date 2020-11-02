// Entry point of the program
import initCheck from './utils/init';
import Mars from './mars';
import { readFile } from './utils/file';

function main() {
  // Sanitize input and output
  // eslint-disable-next-line no-unused-vars
  const { input, output } = initCheck();

  const fileContent: string = readFile(input);

  const planet = new Mars(fileContent);
  planet.startExploration();

  planet.writeOutput(output);
}

main();
