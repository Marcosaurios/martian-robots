// Entry point of the program
import Mars from './mars';
import initCheck from './utils/init';
import { readFile } from './utils/file';

/**
 * Main entry of the Node Program. Loads args, reads file, executes Mars logic and gives output of the result.
 */
function main() {
  // Sanitize input and output
  const { input, output } = initCheck();

  const fileContent: string = readFile(input);

  const planet = new Mars(fileContent);
  planet.startExploration();

  planet.writeOutput(output);
}

main();
