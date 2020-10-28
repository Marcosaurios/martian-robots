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

interface Robot {
  initialPosition: {
    x: number;
    y: number;
    head: Orientation;
  };
  instructions: Movement[];
}

export { Orientation, Movement, Robot };
