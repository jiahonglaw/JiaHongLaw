const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below

let bacLow = bacData[0];

let bacHigh = bacData[1];

let bacOpen = bacData[2];

let bacClose = bacData[3];

let bacVolume = bacData[4];


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