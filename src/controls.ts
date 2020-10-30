import { MarsPosition, Movement, Orientation } from './types';

const Controls = {
  [Movement.F]: (situation: MarsPosition): MarsPosition => {
    const newPos = { ...situation };

    switch (newPos.head) {
      case Orientation.N: {
        newPos.y += 1;
        break;
      }
      case Orientation.E: {
        newPos.x += 1;
        break;
      }
      case Orientation.S: {
        newPos.y -= 1;
        break;
      }
      case Orientation.W: {
        newPos.x -= 1;
        break;
      }
      default: {
        break;
      }
    }

    return newPos;
  },
  [Movement.L]: (situation: MarsPosition): MarsPosition => {
    const headings = [
      Orientation.N,
      Orientation.E,
      Orientation.S,
      Orientation.W,
    ];

    const newPos = { ...situation };

    let actualHead = headings.indexOf(newPos.head);
    actualHead -= 1;
    if (actualHead < 0) {
      actualHead = 3;
    }

    newPos.head = headings[actualHead % 4];

    return newPos;
  },
  [Movement.R]: (situation: MarsPosition): MarsPosition => {
    const headings = [
      Orientation.N,
      Orientation.E,
      Orientation.S,
      Orientation.W,
    ];

    const newPos = { ...situation };

    let actualHead = headings.indexOf(newPos.head);
    actualHead += 1;

    newPos.head = headings[actualHead % 4];

    return newPos;
  },
  // future implementations
};

export default Controls;
