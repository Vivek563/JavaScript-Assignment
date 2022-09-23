
// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more


function bmi(w, h){
    return w/(h**2);
}

let weight = 70;
let height = 1.8;

let bmiCal = bmi(weight,height);

console.log(`Your BMI is ${bmiCal.toFixed(1)}`);

if(bmiCal<18.5){
    console.log("Underweight");
}
else if(bmiCal>=18.5 && bmiCal<=24.9){
    console.log("Normal weight");
}
else if(bmiCal>=25 && bmiCal<=29.9){
    console.log("Overweight");
}
else{
    console.log("Obese");
}