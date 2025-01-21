const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

//convert all figures to float.

let disneyOpen = parseFloat(disneyData["open"]);

let disneyHigh = parseFloat(disneyData["high"]);

let disneyLow = parseFloat(disneyData["low"]);

let disneyClose = parseFloat(disneyData["close"]) ;

let Result = disneyOpen - disneyHigh + disneyLow - disneyClose; //Calculate result

Result = Result.toFixed(2); //Round the result to 2 decimals

console.log(Result)