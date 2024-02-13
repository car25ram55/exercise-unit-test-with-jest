// Import the function sum from app.js
const {sum} = require('./app.js');

// Write your own tests here
test('adds 14 + 9 to equal 3', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test('One Euro should be 1.206 dollars', () => {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(3.5 * 1.2); 
})

test('One Dollar should be 127.9 Yen', () => {
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(3.5);
    const expected = 3.5 * 1.2;
    expect(fromDollarToYen(3.5)).toBe(3.5 * 127.9); 
})

test('One Pound should be 0.8 Yen', () => {
    const { fromYenToPound } = require('./app.js');
    const dollars = fromYenToPound(3.5);
    const expected = 3.5 * 0.8;
    expect(fromYenToPound(3.5)).toBe(3.5 * 0.8);
})


