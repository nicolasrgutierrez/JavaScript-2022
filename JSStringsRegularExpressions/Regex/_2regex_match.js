
let text = "The countdown is starting: 3... 2... 1...";
let digits = /\d+/;
let digits_global = /\d+/g;

console.log(digits.test(text));

console.log(text.search(digits));

// if(text.search(regex) !== -1) {

// }

console.log(text.match(digits));

console.log(text.match(digits).at(0));
console.log(text.match(digits_global));

console.log("Matches All:")
let matches = text.matchAll(digits_global);
console.log(matches);

for (const match of matches) {
    console.log(`Found value "${match[0]} at index=${match.index}. The searched string was= ${match.input}`);
}