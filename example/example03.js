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

console.log(car.name);
car.start();
