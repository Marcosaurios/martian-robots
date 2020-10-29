/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
enum Orientation {
  N,
  E,
  S,
  W,
}

enum Movement {
  F,
  R,
  L,
}

interface MarsPosition {
  x: number;
  y: number;
  head: Orientation;
  alive: boolean;
}

interface Robot {
  initialPosition: MarsPosition;
  actualPosition: MarsPosition;
  instructions: Movement[];
}

export { Orientation, Movement, MarsPosition, Robot };
