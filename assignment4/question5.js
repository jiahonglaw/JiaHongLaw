const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

let sumofClose = 0;
let Closecount = 0;


for (let price in disneyData) {
	sumofClose += parseFloat(disneyData[price]['close']);
	Closecount += 1;
}

let averagepx =  sumofClose/Closecount;

let avgprice = Math.round(averagepx * 100)/100

console.log("Average closing price of Disney is " + avgprice)