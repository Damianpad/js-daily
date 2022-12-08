/*
*******************
String Fundamentals
*******************

In JavaScript, the textual data is stored as strings. There is no separate type for a single character

*/

/*
******
Quotes
******

Strings can be enclosed within either single quptes, double quotes or backticks
*/

let single = 'single-quoted'
let double = "double-quoted"

// Backticks allow us to embed any expression into the string by wrapping it in ${}

let backticks = `backticks`

console.log(`Backticks can be embedded in any expression: ${backticks}`);

// Another advantage of using backticks is that they allow a string to span multiple lines

let guestList = `Guests
Damian
Ana
Lizzy
Sophia
`

console.log(guestList);

/*
******************
Special Characters
******************

Special characters can be encoded using escape sequences

*/

let newLine = '\n New Line'
let quotes = 'This \"encodes\" the different kinds of quotes. Isn\'t that awesome? '
console.log(quotes);


/*
*************
String Length
*************

The length property has the string length
*/

let stringLength = 'Helllooooooo'
console.log(`The string length is ${stringLength.length}`);

/*
IMPORTANT NOTE: 
People with a background in some other languages sometimes mistype by calling str.length() instead of just str.length. That doesn't work.

Please note that str.length is a numeric property, NOT A FUNCTION. There is no need to add parenthesis after it. 

tldr; 

USE .length
NOT .length()
*/