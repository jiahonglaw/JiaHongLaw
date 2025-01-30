const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below


    
let totalPrice = 0;
let totalCount = 0;

for (let price of amdPrices) {
    totalPrice += price;
    totalCount += 1;
    }

avgPricecal = totalPrice/totalCount;

avgPrice = parseFloat(avgPricecal.toFixed(2));

console.log("The 7-day SMA of AMD is " + avgPrice)