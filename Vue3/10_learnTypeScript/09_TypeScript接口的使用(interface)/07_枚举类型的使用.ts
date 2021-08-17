enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}

// 枚举的默认值 0 ，1，2，3

function trunDirection(direction: Direction) {
  console.log(direction);
  switch (direction) {
    case Direction.LEFT:
      console.log("向左")
      break;
    case Direction.RIGHT:
      console.log("向右")
      break;
    case Direction.TOP:
      console.log("向上")
      break;
    case Direction.BOTTOM:
      console.log("向下")
      break;
    default:
      const foo: never = direction
      break;
  }
}

trunDirection(Direction.LEFT)
trunDirection(Direction.RIGHT)
trunDirection(Direction.TOP)
trunDirection(Direction.BOTTOM)
