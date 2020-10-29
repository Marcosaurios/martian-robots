import { MarsPosition, Movement, Orientation } from './types';

const Controls = {
  forward(situation: MarsPosition): { x: number; y: number } {
    const newCoords = { x: situation.x, y: situation.y };

    switch (situation.head) {
      case Orientation.N: {
        newCoords.y += 1;
        break;
      }
      case Orientation.E: {
        newCoords.x += 1;
        break;
      }
      case Orientation.S: {
        newCoords.y -= 1;
        break;
      }
      case Orientation.W: {
        newCoords.x -= 1;
        break;
      }
      default: {
        break;
      }
    }

    return newCoords;
  },
  rotate(rotation: Movement.R | Movement.L, situation: MarsPosition) {
    const headings = [
      Orientation.N,
      Orientation.E,
      Orientation.S,
      Orientation.W,
    ];

    let actualHead = headings.indexOf(situation.head);

    switch (rotation) {
      case Movement.R: {
        actualHead += 1;
        break;
      }
      case Movement.L: {
        actualHead -= 1;
        if (actualHead < 0) {
          actualHead = 3;
        }
        break;
      }
      default: {
        break;
      }
    }

    const finalHead = headings[actualHead % 4];

    return finalHead;
  },
  // future implementations
};

export default Controls;
