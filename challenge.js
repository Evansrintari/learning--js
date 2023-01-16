/*const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};*/

// const calcTip = (bill) =>
// bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//
// const bills = [125, 545, 44];
//
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);
//
// OBJECT CHALLENGE
const mark = {
  fullName: " mark Smith",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    // console.log(this);
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Miller",
  Weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.Weight / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();

john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`
  );
}

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[
// console.log(bills, tips, totals);

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips, totals, bills);

const calcAverage = (arr) => {};
