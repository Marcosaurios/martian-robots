import * as fs from 'fs';

function readFile(input: string): string {
  return fs.readFileSync(input, { encoding: 'utf-8' });
}

function writeFile(input: string, output: string): void {
  fs.writeFileSync(output, input, 'utf8');
}

export { readFile, writeFile };
