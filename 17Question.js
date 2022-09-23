// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date = new Date();

console.log(
  `Date time format is ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}  ${
    date.getHours()
  }:${date.getMinutes()}`
);

console.log(
  `Date time format is ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${
    date.getHours()
  }:${date.getMinutes()}`
);

console.log(
  `Date time format is ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${
    date.getHours()
  }:${date.getMinutes()}`
);


