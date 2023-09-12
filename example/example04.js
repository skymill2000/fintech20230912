let car = {
  name: "소나타",
  ph: 300,
  start: () => {
    console.log("engine Start");
  },
  stop: () => {
    console.log("engine Stop");
  },
};

let array = ["sonata", 1234, car];

const points = [40, 100, 1, 5, 25, 10];

// console.log(points[0]);
// console.log(points[1]);
// console.log(points[2]);
//...

for (let i = 0; i < points.length; i++) {
  console.log(points[i]);
}
console.log("----------");
for (point of points) {
  console.log(point);
}
console.log("----------");
points.map((point) => {
  console.log(point);
});
