// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let Evens = 0;
let Odds = 0;

for(let i=0; i<=100; i++){

    if(i%2==0){
        Evens = Evens + i;
    }
    else{
        Odds = Odds + i;
    }

}

console.log(`Sum of even number from 1 to 100 is ${Evens}`);
console.log(`Sum of odd number from 1 to 100 is ${Odds}`);