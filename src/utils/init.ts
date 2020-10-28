import args from 'args';

export default function initCheck(): { input: string; output: string } {
  args
    .option('in', 'Specify an input file.', 'input.txt')
    .option('out', 'Specify an output file.', 'output.txt');

  const flags = args.parse(process.argv);

  console.log('args are', flags);

  const input = flags.in;
  const output = flags.out;

  return { input, output };
}
