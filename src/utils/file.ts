import * as fs from 'fs';

function readFile(input: string): string {
  return fs.readFileSync(input, { encoding: 'utf-8' });
}

export default readFile;
