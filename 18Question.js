// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let user = prompt("Enter the age of person");

if(user >= 18){
    alert("You are old enough to drive")
}else{
    alert(`please wait for ${18-user} years to get enough to drive`)
}