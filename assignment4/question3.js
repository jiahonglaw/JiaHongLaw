const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

// Part 1 - Calcutate 7-day SMA
let totalPrice = 0;
let totalCount = 0;

for (let price of amdPrices) {
    totalPrice += price;
    totalCount += 1;
    }

let avgPricecal = totalPrice/totalCount

let avgPrice = parseFloat(avgPricecal.toFixed(2))

// Part 2 - Measure price against SMA

let aboveCount = 0

for (let price of amdPrices) {
    if (price > avgPrice) {
        aboveCount += 1;
    }
    
    }

console.log("Number of days AMD was above the 7-day SMA is: " + aboveCount)