/**
 * CHALLENGE 1: ROUND NUMBER
 * @name round
 * @description Write a function that round a number (`n`) to given decimal places.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 *
 * 
 * @example Usage:
 * round(Math.PI, 2) // => 3.14
 * 
 * 
 * @param {Number} n The number to be rounded
 * @param {Number} places Decimal places
 * 
 * @returns {Number} Rounded number
 */
module.exports.round = function(n, places = 0) {
	return +parseFloat(n).toFixed(places);
}


/**
 * CHALLENGE 2: MERGE MULTIPLE ARRAYS
 * @name arrayMerge
 * @description Write a function that merges multiple given arrays.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * ArrayMerge([1, 2], ['a', 'b']) //=>  [1, 2, 'a', 'b']
 * 
 * 
 * @param {Array} arr Arrays to merge
 * 
 * @returns {Array} Returns the merge of all arrays
 */
module.exports.arrayMerge = function(...arr) {
	const mergedArr = [];
	arr.forEach((arrSub) => {
		arrSub.forEach((ele) => {
			mergedArr.push(ele);
		})
	});
	return mergedArr;
}


/**
 * CHALLENGE 3: SUM CONTENT OF AN ARRAY
 * 
 * @name arraySum
 * @description Write a function to sum the content of an array
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * arraySum([10, 10, 10]) //=> 30
 * 
 * 
 * @param {Array} arr Array to sum
 * 
 * @return {Number} The sum of all items in the array
 */
module.exports.arraySum = function(arr) {
	let sum = 0;
	arr.forEach((ele) => {
		sum = sum + ele;
	});
	return sum;
}


/**
 * CHALLENGE 4: OBJECT FOREACH
 * @name objectForEach
 * @description ForEach function that works with Objects.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * objectForEach({ a:1, b:2 }, (key, value) => console.log(key, value)) //=> { a:1, b:2 }
 * 
 * 
 * @param {Object} obj Main Object
 * @param {Function} callback Function callback
 * 
 * @returns {Object} The start object
 */
module.exports.objectForEach = function(obj, callback) {
	Object.keys(obj).forEach((key) => {
		callback(key, obj[key]);
	});
	return obj;
}


/**
 * CHALLENGE 5: REVERSE STRING
 * @name reverseString
 * @description A function that reverse a string.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * reverseString('hello') //=> 'ollah'
 * 
 * 
 * @param {String} str String to be reversed.
 * 
 * @returns {String} String reversed.
 */
module.exports.reverseString = function(str) {
	let reversedString = [];
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString.push(str[i])
	}
	return reversedString.join('');
}


/**
 * CHALLENGE 6: CHECK PALINDROME
 * @name isPalindrome
 * @description A function that checks if a word is a palindrome.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * isPalindrome('racecar') //=> true
 * 
 * 
 * @param {String} str String to be checked for palindrome.
 * 
 * @returns {Boolean} Return true if is a palindrome.
 */
module.exports.isPalindrome = function(str) {
	const reversedArr = [];
	for (let i = str.length - 1; i >= 0; i--) {
		reversedArr.push(str[i])
	}
	const reversedStr = reversedArr.join('');
	return str === reversedStr;
}


/**
 * CHALLENGE 7: IS MULTIPLE OF
 * @name isMultipleOf
 * @description A function that checks if a number is multiple of another number.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * isMultipleOf(3, 15) //=> true
 * 
 * 
 * @param {Number} a Number to be checked for multiple of `b`
 * @param {Number} b 
 * 
 * @returns {Boolean} If `a` is multiple of `b` returns true
 */
module.exports.isMultipleOf = function(a, b) {
	return b % a === 0;
}


/**
 * CHALLENGE 8: GET THE LONGEST WORD
 * @name longestWord
 * @description A function that returns the longest word of a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * longestWord('short loooong l0000ng') //=> 'loooong'
 * 
 * 
 * @param {String} str The string to be checked 
 * 
 * @returns {String} Returns the longest word of `str`
 */
module.exports.longestWord = function(str) {
	const words = str.trim().replace(/\W/g, ' ').trim().split(/\s+/);
	let longestWord = words[0];
	for (let i = 1; i < words.length; i++) {
		if (words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}
	return longestWord;
}


/**
 * CHALLENGE 9: CAPITALIZE
 * @name capitalize
 * @description A function that capitalize each word in a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * capitalize('hello world') //=> 'Hello World'
 * 
 * 
 * @param {String} str The string to be capitalized 
 * 
 * @returns {String} Returns a capitalized string
 */
module.exports.capitalize = function(str) {
	const words = str.split(' ');
	const alteredWords = [];
	words.forEach((word) => {
		word = word[0].toUpperCase() + word.slice(1, word.length);
		alteredWords.push(word);
	});
	return alteredWords.join(' ');
}



/**
 * CHALLENGE 10: VOWEL COUNT
 * @name vowelCount
 * @description A function that count vowel in a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * vowelCount('fox') //=> 1
 * 
 * 
 * @param {String} str The string to be checked 
 * 
 * @returns {Number} Returns number of vowels in `str`
 */
module.exports.vowelCount = function(str) {
	const vowels = {
		'a': 1,
		'e': 1,
		'i': 1,
		'o': 1,
		'u': 1
	}
	let count = 0;
	str.split('').forEach((letter) => {
		count += (vowels[letter] || 0);
	})
	return count;
}



/**
 * CHALLENGE 11: MAX CHAR
 * @name maxChar
 * @description Get the most used char in a sentence.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * maxChar('hello') //=> l
 * 
 * 
 * @param {String} str The string to be checked 
 * 
 * @returns {Number} Returns character most used in the string.
 */
module.exports.maxChar = function(str) {
	const strMap = {};
	let greatestCount = 0;
	let letterWithGreatestCount = str[0];
	str.split('').forEach((letter) => {
		if(!strMap[letter]) {
			strMap[letter] = 1;
		} else {
			strMap[letter]++;
		}
		if(greatestCount < strMap[letter]) {
			letterWithGreatestCount = letter;
			greatestCount = strMap[letter];
		}
	});
	return {
		char: letterWithGreatestCount,
		count: greatestCount
	}
}


/**
 * CHALLENGE 12: FIZZ BUZZ
 * @name fizzBuzz
 * @description Fizz Buzz game, generate number from 0 to `max` and if the number is multiple of `n1` print "Fizz", if the number is multiple of `n2` print "Buzz", if is multiple of both print "FizzBuzz" else print the number.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 *  
 * @example
 * fizzBuzz() //=> [0, 1, 2, Fizz, 4, Buzz ...etc]
 * 
 * 
 * @param {Number} n1 Fizz number
 * @param {Number} n2 Buzz number
 * @param {Number} max Length of the array
 * 
 * @returns {Array} Returns an array of numbers
 */
module.exports.fizzBuzz = function({
	n1 = 3,
	n2 = 5,
	max = 100
} = {}) {
	const arr = [];
	for(let i = 0; i <= max; i++) {
		if((i % n1 === 0) && (i % n2 === 0)) {
			arr.push('FizzBuzz')
		} else if(i % n1  === 0) {
			arr.push('Fizz')
		} else if(i % n2 === 0) {
			arr.push('Buzz')
		}  else {
			arr.push(i)
		}
	};
	return arr;
}


/**
 * CHALLENGE 13: SIMPLE ADDING
 * @name simpleAdding
 * @description Write a function that sums all numbers from 0 to the given number.
 * @author Federico Vitale <fedevitale99[at]gmail.com>
 * 
 * 
 * @example Usage:
 * simpleAdding(3) //=> 6
 * 
 * 
 * @param {Number} num Counter 
 * 
 * @returns {Number} Returns sum of all numbers from 0 to `counter`
 */
module.exports.simpleAdding = function(num) {
	let sum = 0;
	for(let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}


/**
 * CHALLENGE 14: ARRAY TO TREE
 * @name arrayToTree
 * @description Transform an array into a tree like object.
 * @author Nenad Vracar (http://nenadvracar.com)
 * 
 * @see https://stackoverflow.com/questions/48951551/what-is-the-most-efficient-way-to-transform-an-array-of-array-of-string-to-a-tre
 * 
 * @example Usage:
 * arrayToTree(['folder', 'subfolder', 'file.txt']) //=> [{name: 'folder', children: [ { name: 'subfolder', children: [ {name: 'file.txt'} ]} ]}]
 * 
 * 
 * @param {Array} paths Array of the items to convert 
 * 
 * @returns {Array} Returns the tree generated from `paths`
 */
module.exports.arrayToTree = function(...paths) {
	const tree = [];
	let lastChildRef = tree;
	for(let i = 0; i < paths[0].length; i++) {
		const obj = {
			name: paths[0][i],
		};
		lastChildRef.push(obj);
		if(i !== paths[0].length - 1) {
			obj.children = [];
		}
		lastChildRef = obj.children;
	}
	return tree;
}


/**
 * CHALLENGE 15: ALPHABETICALLY SORT
 * @name alphabeticallySort
 * @description Write a function that can be used into an Array.sort() for sorting items alphabetically.
 * @author Nachiketha <nachikethashu[at]gmail.com>
 * 
 * @see https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
 * 
 * @example Usage:
 * ['Italy', 'Canada', 'Australia'].sort(alphabeticallySort) //=> ['Australia', 'Canada', 'Italy']
 * 
 * 
 * @param {String} a First argument of the `.sort` function 
 * @param {String} b Second argument of the `.sort` function 
 * 
 * @returns {Boolean}
 */
module.exports.alphabeticallySort = function(a, b) {
	return a.localeCompare(b);
}


/**
* CHALLENGE 16: FIRST RECURRING CHARACTER
* @name firstRecurringCharacter
* @description Write a function that returns the first recurring character in a string or null if no recursion.
* @author Federico Vitale <fedevitale99[at]gmail.com>
*
* @example Usage:
* firstRecurringChar('federico') // => 'e'
*
* @param {String} str String to analyze
*
* @returns {String} or {Null}
*/
module.exports.firstRecurringChar = function(str) {
	const charCountMap = {};
	str.split('').forEach((char) => {
		if(!charCountMap[char]) {
			charCountMap[char] = 0;
		} else {
			return char;
		}
	})
}


/**
* CHALLENGE 17: OBJECT MERGE
* @name objectMerge
* @description Write a function that returns an object that includes all given objects.
* @author Federico Vitale <fedevitale99[at]gmail.com>
*
* @example Usage:
* objectMerge({ a: 'b' }, { c: 'd' }) // => { a: 'b', c: 'd' }
*
* @param {Array} objects - An array of objects
*
* @returns {Object}
*/
module.exports.objectMerge = function(...objects) {
	let mergedObj = {};
	objects.forEach(obj => {
		mergedObj = {
			...mergedObj,
			...obj,
		}
	});
	return mergedObj;
}
