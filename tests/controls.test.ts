import Controls from '../src/controls';
import { MarsPosition, Movement, Orientation } from '../src/types';

describe('controls: forward working as expected', () => {
  test('should move forward in North', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.N,
      alive: true,
    };

    expect(Controls.forward(pos)).toEqual({ x: 0, y: 1 });
  });
  test('should move forward in East', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.E,
      alive: true,
    };

    expect(Controls.forward(pos)).toEqual({ x: 1, y: 0 });
  });
  test('should move forward in South', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.S,
      alive: true,
    };

    expect(Controls.forward(pos)).toEqual({ x: 0, y: -1 });
  });
  test('should move forward in West', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.W,
      alive: true,
    };

    expect(Controls.forward(pos)).toEqual({ x: -1, y: 0 });
  });
});

describe('controls: rotate R working as expected', () => {
  test('should orientation be E when N', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.N,
      alive: true,
    };

    const expected = Orientation.E;

    expect(Controls.rotate(Movement.R, pos)).toEqual(expected);
  });
  test('should orientation be S when E', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.E,
      alive: true,
    };

    const expected = Orientation.S;

    expect(Controls.rotate(Movement.R, pos)).toEqual(expected);
  });
  test('should orientation be W when S', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.S,
      alive: true,
    };

    const expected = Orientation.W;

    expect(Controls.rotate(Movement.R, pos)).toEqual(expected);
  });
  test('should orientation be N when W', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.W,
      alive: true,
    };

    const expected = Orientation.N;

    expect(Controls.rotate(Movement.R, pos)).toEqual(expected);
  });
});

describe('controls: rotate L working as expected', () => {
  test('should orientation be W when N', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.N,
      alive: true,
    };

    const expected = Orientation.W;

    expect(Controls.rotate(Movement.L, pos)).toEqual(expected);
  });
  test('should orientation be S when W', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.W,
      alive: true,
    };

    const expected = Orientation.S;

    expect(Controls.rotate(Movement.L, pos)).toEqual(expected);
  });
  test('should orientation be E when S', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.S,
      alive: true,
    };

    const expected = Orientation.E;

    expect(Controls.rotate(Movement.L, pos)).toEqual(expected);
  });
  test('should orientation be N when E', () => {
    const pos: MarsPosition = {
      x: 0,
      y: 0,
      head: Orientation.E,
      alive: true,
    };

    const expected = Orientation.N;

    expect(Controls.rotate(Movement.L, pos)).toEqual(expected);
  });
});
