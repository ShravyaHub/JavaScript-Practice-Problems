let headsWon = 0, tailsWon = 0;

while((headsWon != 11) && (tailsWon != 11)) {
    let coinFlip = Math.floor(Math.random() * 10) % 2;
    if(coinFlip == 1) {
        headsWon++;
    } else {
        tailsWon++;
    }
}

if(headsWon == 11) {
    console.log("Heads won");
} else {
    console.log("Tails won");
}