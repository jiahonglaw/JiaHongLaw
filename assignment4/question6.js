// Modify the code below:

// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

/* let data = ()
for price in data:
	if price < 3:
    data.push(price)
    */



const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

let data = [];
let orgdata = amdPrices;
orgdata.sort((a,b) => a-b)
for (let price in orgdata){
    if (price < 3){
        data.push(amdPrices[price])
}
}

console.log("The three lowest prices are " + data[0] + ", " + data[1] + ", and " + data[2])




// More manual way (ALTERNATIVE, not for grading)


/*
let data = []
let lowest = 0;
let secondlowest = 0;
let thirdlowest = 0;


//Finding the lowest number first

for (let price in amdPrices) {
    if (price > 0){
        if (lowest > amdPrices[price]){
            lowest = amdPrices[price]
        }
        
    }

    else {
        lowest = amdPrices[price]
    }
}


//Finding the second lowest number

for (let price in amdPrices) {
    if (amdPrices[price] != lowest) {
        if (secondlowest == 0){
            secondlowest = amdPrices[price]
        }
else if (secondlowest > amdPrices[price]){
            secondlowest = amdPrices[price]
        }
    }
}


//Finding the third lowest number

for (let price in amdPrices) {
    if (amdPrices[price] != lowest) {
        if (amdPrices[price] != secondlowest) {
            if (thirdlowest == 0){
                thirdlowest = amdPrices[price]

        }
        else if (thirdlowest > amdPrices[price]){
            thirdlowest = amdPrices[price]
        }
    }
}
}

data.push(lowest)
data.push(secondlowest)
data.push(thirdlowest)

console.log("The three lowest prices are " + data[0] + ", " + data[1] + ", and " + data[2])

*/