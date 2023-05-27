// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}

let aliBMI = calculateBMI(70, 1.8); // calculate BMI for Ali
let mohamedBMI = calculateBMI(80, 1.75); // calculate BMI for Mohamed

if (aliBMI > mohamedBMI) {
  console.log("Ali's BMI is higher than Mohamed's BMI");
} else if (mohamedBMI > aliBMI) {
  console.log("Mohamed's BMI is higher than Ali's BMI");
} else {
  console.log("Ali's BMI is the same as Mohamed's BMI");
}
