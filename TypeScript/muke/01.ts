type Point = { x: number, y: number }

function tsDemo(data: Point) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}