// CReate single line strings
let firstName = "David";
let lastName = 'Tucker';
let title = `VP Engineering`;
title = `CTO`;

// String concatenation with the plus operator
let fullName = firstName + " " + lastName;

// String concatenation with template literals
fullName = `${firstName} ${lastName}` ;
console.log(fullName);


// Creating multi-line strings with \n
let bio = "Line \nLine 2\nLine 3";
console.log(bio);

// Creating multi-line strings with backticks
bio = `About David Tucker:
David Tucker is the current CTO of Globomantics.
He also serves as an author for Pluralsight.`
console.log(bio);

// Escaping characters
let quote = 'David said, "Javascript is great."';
quote = "David said, \"JavaScript is great.\"";
quote = `JavaScript can use 'single' and "double" quotes`;
quote = `In JavaScript, you must escape the \\ character`;
console.log(quote);

// String length
let length = quote.length;
console.log(`Quote Length: ${length}`);

// Accessing specific characters
let secondCharacter = quote[1];
console.log(secondCharacter);

// Changing Case
let uppercaseName = fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName = fullName.toLowerCase();
console.log(lowercaseName);

// FInding a substring
let idx1 = fullName.indexOf("Dav");
console.log(`Index 1: ${idx1}`);
let idx2 = fullName.indexOf("ker");
console.log(`Index 2: ${idx2}`);
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3: ${idx3}`);

// Does a string contain a substring
let doesContain = fullName.includes("Dav");
console.log(doesContain);