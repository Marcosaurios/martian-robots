/**
 * Writes in the console the given map
 * @param {number[][]} map Array being the actual Mars map
 */
export default function drawMap(map: number[][]): void {
  for (let y = 0; y < map.length; y += 1) {
    let line = '';
    for (let x = 0; x < map[y].length; x += 1) {
      line += `${map[y][x]} `;
    }
    console.log(line);
  }
}
