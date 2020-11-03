import { MarsPosition, Movement, Orientation } from './types';

/**
 * Executes forward movement on situation
 * @param {MarsPosition} situation Current position to move forward
 */
function forward(situation: MarsPosition) {
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
}

/**
 * Executes left movement on situation
 * @param {MarsPosition} situation Current position to move left
 */
function left(situation: MarsPosition): MarsPosition {
  const headings = [Orientation.N, Orientation.E, Orientation.S, Orientation.W];

  const newPos = { ...situation };

  let actualHead = headings.indexOf(newPos.head);
  actualHead -= 1;
  if (actualHead < 0) {
    actualHead = 3;
  }

  newPos.head = headings[actualHead % 4];

  return newPos;
}

/**
 * Executes right movement on situation
 * @param {MarsPosition} situation Current position to move right
 */
function right(situation: MarsPosition): MarsPosition {
  const headings = [Orientation.N, Orientation.E, Orientation.S, Orientation.W];

  const newPos = { ...situation };

  let actualHead = headings.indexOf(newPos.head);
  actualHead += 1;

  newPos.head = headings[actualHead % 4];

  return newPos;
}

/**
 * Control bindings
 */
const Controls = {
  [Movement.F]: (situation: MarsPosition): MarsPosition => {
    return forward(situation);
  },
  [Movement.L]: (situation: MarsPosition): MarsPosition => {
    return left(situation);
  },
  [Movement.R]: (situation: MarsPosition): MarsPosition => {
    return right(situation);
  },
  // future implementations
};

export default Controls;
