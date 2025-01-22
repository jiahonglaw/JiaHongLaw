const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

let DisneyLow = DisneyData["open"];

let DisneyHigh = DisneyData["high"];

let DisneyOpen = DisneyData["low"];

let DisneyClose = DisneyData[3];

let DisneyVolume = DisneyData[4];


// Test for bullish case for high and low trading volume.
if (bacClose > bacOpen){
    if(bacVolume > 100000) {
        console.log("Strong Bullish")
    } else { console.log("Bullish")
    }
}

// Test for bearish case for high and low trading volume.

else if (bacClose<bacOpen){
    if(bacVolume > 10000) {
        console.log("Strong Bearish")
    } else { console.log("Bearish")
    }
}

// Test for netural case.

else {console.log("neutral")}