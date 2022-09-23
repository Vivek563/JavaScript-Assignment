// 35. Write a functions which checks if all items are unique in the array.

let arr = ['car', 5, 'bar', 88, 'jeansa', -8, 51, 'sky', 888, 'jeansa'];

let count=0;

let prev;

for(let i=0; i<arr.length && count<=1; i++){
    count = 0;
    prev = arr[i];
    arr.forEach(e => {
        if(e===prev){
            count++;
        }
    });  
}

// console.log(count);

if(count==1){
    console.log(`All items are unique`);
}
else{
    console.log(`All items are not unique`);
}