// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();

console.log(`the year today is ${date.getFullYear()}`);

console.log(`the month today as a number is ${date.getMonth() + 1}`);

console.log(
  `The date today is ${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`
);

console.log(`the day today as a number is ${date.getDate()}`);

console.log(`the hours now is ${date.getHours()}'o clock`);

console.log(`the minutes now is ${date.getMinutes()} minutes`);

console.log(
  `the numbers of seconds elapsed from January 1, 1970 to now ${Math.round(
    date.getTime() / 1000
  )} minutes`
);
