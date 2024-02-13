// this a function that sums up two numbers
function sum(a, b) {
    return a + b;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
    return dollar * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
    return yen * oneEuroIs.GBP;
}

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
