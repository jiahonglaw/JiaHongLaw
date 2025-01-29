const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

let Closeprice = 0
let Countprice = 0

for(let i = 0; i < msftData.length; i++) {

	Closeprice += msftData[i][3];
	Countprice +=1
	
}

let Averageclose = Closeprice/Countprice

Avgclose = parseFloat(Averageclose.toFixed(2));

console.log("Average closing price of MSFT is " + Avgclose)