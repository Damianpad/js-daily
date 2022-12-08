/*
******
Syntax
****** 
string.split()
string.split(seperator)
*/

//Example
const string = 'The morning is upon us'

const arr0 = string.split()
console.log(arr0)

//Splits up the string by every space in the string and returns each string as an element in an array

const arr1 = string.split(' ')
console.log(arr1);

const numArr = '543211'

const arr2 = numArr.split('')
console.log(arr2);

function descendingOrder(n){
    return String(n).split('')
    // return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(5432112));