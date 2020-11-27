let money = 100;

while((money < 200) && (money > 0)) {
    let gamble = Math.floor(Math.random() * 10) % 2;
    if(gamble == 0) {
        money--;
    } else {
        money++;
    }
}

if(money == 0) {
    console.log("Gambler is broke");
} else {
    console.log("Gambler won Rs.200");
}