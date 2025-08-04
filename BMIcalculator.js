let WeightInKg = 74;
let HeightInM = 1.702;

let BMIformula = WeightInKg / (HeightInM ** 2);
let BMI = parseFloat(BMIformula.toFixed(1));

console.log('Your BMI is:', BMI);

if (BMI < 18.5) {
    console.log('You are underweight');
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log('You are normal');
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log('You are overweight');
} else {
    console.log('You are obese');
}
