import args from 'args';

/**
 * Checks the main process has been called with the properly args.
 */
export default function initCheck(): { input: string; output: string } {
  args
    .option('in', 'Specify an input file.', 'input.txt')
    .option('out', 'Specify an output file.', 'output.txt');

  const flags = args.parse(process.argv);

  const input = flags.in;
  const output = flags.out;

  return { input, output };
}
