{
    let STANDARD_FEET = 1;
    let STANDARD_INCH = 12;
    let givenInch = 42;
    let feet = givenInch * STANDARD_FEET / STANDARD_INCH;
    console.log("42in = " + feet + "ft");
}

{
    let STANDARD_FEET = 3;
    let STANDARD_METER = 1;
    let lengthInFeet = 60;
    let breadthInFeet = 40;
    let lengthInMeters = lengthInFeet * STANDARD_METER / STANDARD_FEET;
    let breadthInMeters = breadthInFeet * STANDARD_METER / STANDARD_FEET;
    console.log("Plot dimensions in meters = " + lengthInMeters + " x " + breadthInMeters + " meters");
}

{
    let STANDARD_FEET = 43560;
    let STANDARD_ACRE = 1;
    let TOTAL_PLOTS = 25;
    let lengthInFeet = 60;
    let breadthInFeet = 40;
    let plotAreaInFeet = lengthInFeet * breadthInFeet;
    let totalAreaInFeet = plotAreaInFeet * TOTAL_PLOTS;
    let totalAreaInAcres = totalAreaInFeet * STANDARD_ACRE / STANDARD_FEET;
    console.log("Area of 25 plots = " + totalAreaInAcres + " acres");
}