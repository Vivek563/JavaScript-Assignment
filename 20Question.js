// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = 40;

if(score>=80){
    console.log("You are passed with Grade A");
}
else if(score>=70){
    console.log("You are passed with Grade B");
}else if(score>=60){
    console.log("You are passed with Grade C");
}else if(score>=50){
    console.log("You are passed with Grade D");
}else if(score>=0){
    console.log("You are Failed with Grade F");
}