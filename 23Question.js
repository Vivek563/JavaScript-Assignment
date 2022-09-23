// 23. Write a program which tells the number of days in a month, now consider leap year.

let month=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; 
let a = 1;
let year=2020;

console.log(`The number of days in ${month[a]} ${year} is ${(new Date(year, a+1, 0)).getDate()}`);