/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method

 * initialise the variable called coins to an array containing the values:
 * nickels, dimes
 * initialise the variable called  more coins to an array containing the values:
 * quarters, loonies, toonies
 * with a variable array called total coins, add the array "more coins" to the end of "coins" using concatenation
 * Then console log out total coins. Write a single line comment as to what will be displayed.
 */

var coins = ["nickels", "dimes"];
var moreCoins = ["quarters", "loonies", "toonies"];
var totalCoins = coins.concat(moreCoins);

console.log(totalCoins);
//[ 'nickels', 'dimes', 'quarters', 'loonies', 'toonies' ]






/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * initialise the variable `groceries` to a 2-Dimensional array containing the values below:
 *  use concatenation to make the variable sentence with the value of 
 * "You need to buy _one box_ of _cereal_ and _5 apples_."
 *  and console log the sentence.
 * 
 * 
 *          column[0]   column[1]   column[2]   column[3]
 * row 1    cereal      grain       one box     5 dollars
 * row 2    apples      gaia        5 apples    3 dollars
 */

var groceries = [
    ["cereal", "grain", "one box", "5 dollars"],
    ["apples", "gaia", "5 apples", "3 dollars"]
];

var sentence = "You need to buy " + groceries[0][2] + " of " + groceries[0][0] + " and " + groceries[1][2] + "." ;
console.log(sentence);