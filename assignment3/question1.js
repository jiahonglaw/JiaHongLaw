const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below

let totalSum = msftData[0] + msftData[1] + msftData[2] + msftData[3] + msftData[4]; //Add all figures

let totalCount = msftData.length; //count number of values

let msftAverage = totalSum/totalCount; //Calculate the average of all values

console.log(msftAverage)