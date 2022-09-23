// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// For y=mx+c :
// Slope = m
// x-intercept = -c/m
// y-intercept = c

let value = "y=2x-2";

let array = value.split("");

let m = Number(array[2]),
  c = Number(array[4] + array[5]);

console.log(` Slope is ${m} \n x-intercept is ${-c / m} \n y-intercept is ${c}`);
