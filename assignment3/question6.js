const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

let DisneyOpen = disneyData["open"];

let DisneyHigh = disneyData["high"];

let DisneyLow = disneyData["low"];

let DisneyClose = disneyData["close"];

let DisneyVolume = disneyData["volume"];


// Test for bullish case for high and low trading volume.
if (DisneyClose > DisneyOpen){
    if(DisneyVolume > 100000) {
        console.log("Strong Bullish")
    } else { console.log("Bullish")
    }
}

// Test for bearish case for high and low trading volume.

else if (DisneyClose<DisneyOpen){
    if(DisneyVolume > 10000) {
        console.log("Strong Bearish")
    } else { console.log("Bearish")
    }
}

// Test for netural case.

else {console.log("neutral")}