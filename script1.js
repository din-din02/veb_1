// 1
// function getStringLength(value) {
//     if (typeof value === 'string')
//         {return value.length;}
//     else return 0;
// }
// console.log(getStringLength('aaaaa'))
// console.log (getStringLength(undefined))

// 2
// function isString(value) {
// return typeof value === 'string' || value instanceof String; 
// }
// console.log(isString(new String('test')))
// console.log(isString('test'))
// console.log(isString(null))

// 3
// function concatenateStrings(value1, value2) {
//     return value1+value2;
// }
// console.log(concatenateStrings('aa', 'bb'))

// 4
// function getFirstChar(value) {
//     return value.charAt(0);
// }
// console.log(getFirstChar('John Doe'))

// 5
// function removeLeadingAndTrailingWhitespaces(value) {
//     return value.trim();
// }
// console.log(removeLeadingAndTrailingWhitespaces('  Abracadabra'))

// 6
// function removeLeadingWhitespaces(value) {
//     return value.trimStart();
// }
// console.log(removeLeadingWhitespaces('\t\t\tHello, World! '))

// 7
// function removeTrailingWhitespaces(value) {
//     return value.trimEnd();
// }
// console.log(removeTrailingWhitespaces('  Abracadabra'))

// 8
// function repeatString(str, times) {
//     return times < 0 ? '' : str.repeat(times);
// }
// console.log(repeatString('A', 5))

// 9
// function removeFirstOccurrences(str, value) {
//     return str.replace(value, '');
// }
// console.log(removeFirstOccurrences('To be or not to be', 'be'))

// 10
// function removeLastOccurrences(str, value) {
//     let index = str.lastIndexOf(value);
//     if (index === -1) return str; 
//     return str.slice(0, index) + str.slice(index + value.length);
// }
// console.log(removeLastOccurrences('I like legends', 'end'))

// 11
// function sumOfCodes(str) {
//     if (!str) return 0;
//     return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
// }
// console.log(sumOfCodes('My String'))

// 12
// function startsWith(str, substr) {
//     return str.startsWith(substr);
// }
// console.log(startsWith('Hello World', 'World'))

// 13
// function endsWith(str, substr) {
//     return str.endsWith(substr);
// }
// console.log(endsWith('Hello World', 'World'))

// 14
// function formatTime(minutes, seconds) {
//     let min = String(minutes).padStart(2, '0');
//     let sec = String(seconds).padStart(2, '0');
//     return `${min}:${sec}`;
// }
// console.log(formatTime(5, 30))

// 15
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('abcdef'))

// 16
// function orderAlphabetically(str) {
//     return str.split('').sort().join('');
// }
// console.log(orderAlphabetically('webmaster'))

// 17
// function containsSubstring(str, substring) {
//     return str.includes(substring);
// }
// console.log(containsSubstring('Hello, World!', 'World'))

// 18
// function countVowels(str) {
//     let chislo = str.match(/[aeiouy]/gi);
//     return chislo ? chislo.length : 0;
// }
// console.log(countVowels('apple'))

// 19
// function isPalindrome(str) {
//     let clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let revers = clean.split('').reverse().join('');
//     return clean === revers;
// }
// console.log(isPalindrome('madam'))

// 20
// function findLongestWord(sentence) {
//     let words = sentence.split(' ');
//     return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
// }
// console.log(findLongestWord('The quick brown fox'))

// 21
// function reverseWords(str) {
//     let words = str.split(' ');
//     let reversWords = words.map(function(word) {
//         let letters = word.split('');
//         let reversLetters = letters.reverse();
//         let reversedWord = reversLetters.join('');
//         return reversedWord;
//     });
//     let result = reversWords.join(' ');

//     return result;
// }
// console.log(reverseWords('Hello World'))

// 22
// function invertCase(str) {
//     let characters = str.split('');

//     let invertedCharacters = characters.map(function(simvol) {
//         if (simvol === simvol.toUpperCase()) {
//         return simvol.toLowerCase();
//         } else {
//         return simvol.toUpperCase();
//         }
//     });
//     let result = invertedCharacters.join('');

//     return result;
// }
// console.log(invertCase('Hello, World!'))

//  23
// function getStringFromTemplate(firstName, lastName) {
//     return `Hello, ${firstName} ${lastName}!`;
// }
// console.log( getStringFromTemplate('John','Doe'))

// 24
// function extractNameFromTemplate(value) {
//     return value.replace('Hello, ', '').replace('!', '');
// }
// console.log(extractNameFromTemplate('Hello, John Doe!'))

// 25
// function unbracketTag(str) {
//     return str.slice(1, -1);
// }
// console.log( unbracketTag('<div>'))

// 26
// function extractEmails(str) {
//     return str.split(';');
// }
// console.log(extractEmails('info@gmail.com'))

// 27
// function encodeToRot13(str) {
//     const inputAlphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     const outputAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

//     let characters = str.split('');

//     let encodedCharacters = characters.map(function(simvol) {
//         let index = inputAlphabet.indexOf(simvol);
//         if (index === -1) {
//         return simvol;
//         }
//         return outputAlphabet[index];
//     });

//     return encodedCharacters.join('');
// }
// console.log(encodeToRot13('Gb trg gb gur bgure fvqr!'))

// 28
// function getCardId(value) {
//     const deck = [
//         'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
//         'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
//         'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
//         'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
//     ];

//     return deck.indexOf(value);
// }
// console.log(getCardId('K♠'))