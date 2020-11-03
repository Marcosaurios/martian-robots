import * as fs from 'fs';

/**
 * Reads a file path and returns the file content in a string.
 * @param {string} input A string containing the file path to read from
 */
function readFile(input: string): string {
  return fs.readFileSync(input, { encoding: 'utf-8' });
}

/**
 * Writes input content inside a file.
 * @param {string} input A string being file content
 * @param {string} output A string which will become the file output path
 */
function writeFile(input: string, output: string): void {
  fs.writeFileSync(output, input, 'utf8');
}

export { readFile, writeFile };
