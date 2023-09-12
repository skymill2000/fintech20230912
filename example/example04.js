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
console.log(array[1]);
