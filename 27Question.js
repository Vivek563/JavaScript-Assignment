// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let Age = 0;

console.log(ages.sort());

ages.forEach(a => {
    Age=Age+a;
    
});

let average = Age/ages.length;
let min = ages[0];
let max = ages[ages.length-1];
let median = ages[Math.round(ages.length/2)];       
let range = max-min;

console.log(`Minimum age is ${min}`);
console.log(`Maximum age is ${max}`);
console.log(`Median age is ${median}`);        
console.log(`Average age is ${average}`);
console.log(`Range of age is ${range}`);

console.log(`Diff betwn Min and Avg age is ${Math.abs(min - average).toFixed(2)}`);
console.log(`Diff betwn Max and Avg age is ${Math.abs(max - average).toFixed(2)}`);