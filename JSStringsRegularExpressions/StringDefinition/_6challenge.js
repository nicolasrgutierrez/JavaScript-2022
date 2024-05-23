// before
const ourFee = 0.01;
const competitorFee = 0.02;

console.log('Compare our fees with the competitions. To convert 100 USD to EUR:');
const message = "US: $" + 100 * ourFee + " | Competitor: $" + 100 * competitorFee;
console.log(message);

// after

const sum = 100;

console.log('Compare our fees with the competitions. To convert 100 USD to EUR:');
const message2 = `US: $${calculateFee(sum, ourFee)} | Competitor: $${calculateFee(sum, competitorFee)} `;
console.log(message2);

function calculateFee(sum, fee) {
    return sum * fee
}