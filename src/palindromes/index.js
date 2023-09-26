// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// -----------------------------------------------------------

// #1
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }

// #2
// Will check unnecessary the second half - not ok!
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

console.log(palindrome('abcba'));

module.exports = palindrome;
