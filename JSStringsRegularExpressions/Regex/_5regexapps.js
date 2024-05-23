
const preference = "Have you heard of Java? I really love Java!";
console.log(preference.replaceAll("Java", "JavaScript"));

const preference2 = "My most preferred languages are 1-Hava, 2-Python, and 3-C#";
console.log(preference2.replaceAll(/\d-\S+/g, "JavaScript"));

const inputString = 'It is a good idea to  keep  your    Regex short and simple  , right ? Hope you agree !';

function checkForTypos(str) {
    let excessiveSpaces = str.match(/\s\s+/g);
    if(excessiveSpaces !== null) {
        console.log(`Excessvie spacing found between words: ${excessiveSpaces.length}`);
    }

    let spaceBeforePunctuation = str.match(/\s(\?|,|\.|!)/g);
    if(spaceBeforePunctuation !== null) {
        console.log(`Excessive spacing found before punctuation: ${spaceBeforePunctuation.length}`);
    }
}
checkForTypos(inputString);

function trimExtraSpace(str) {
    let trimmedString1 = str.replaceAll(/\s\s+/g, ' ');
    let trimmedString2 = trimmedString1.replaceAll(/(\s)(\?|,|\.|!)/g, '$2');
    return trimmedString2;
}

trimExtraSpace(inputString);