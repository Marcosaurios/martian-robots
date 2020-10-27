export default function initCheck(
  args: string[],
): { input: string; output: string } {
  const input: string = args[0];
  const output: string = args[1] || 'output.txt';

  if (!input) {
    console.error('Input file not specified');
    process.exitCode = 1;
  }

  return { input, output };
}
