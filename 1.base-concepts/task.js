///Задание 1

"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return arr;
  }
  
  if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  }
  
  const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  arr.push(root1, root2);
  return arr;
}

///Задание 2


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);
  
  if (isNaN(percent) || isNaN(contribution) || 
      isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  
  const P = percent / 100 / 12;
  
  const S = amount - contribution;
  
  const n = countMonths;
  
  const payment = S * (P + (P / (Math.pow(1 + P, n) - 1)));
  
  const total = payment * n;
  
  return Math.round(total * 100) / 100;
}