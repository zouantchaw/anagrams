const anagrams = (s1, s2) => {
  let isAnagram;
  // Anagrams should have the same length
  // Check if strings have the same length
  if (s1.length === s2.length) {
    // Set isAnagram to true
    isAnagram = true;

    // Turn s1 and s2 to arrays
    // sort both arrays
    // turn each array back to strings
    let s1Sorted = s1.split('').sort().join('')
    let s2Sorted = s2.split('').sort().join('')

    // if modified strings are not the same
    // switch isAsorted to false
    if (s1Sorted !== s2Sorted) {
      isAnagram = false;
    }
    
  } else {
    // not an anagram
    isAnagram = false;
  }
  // return isAnagram;
  console.log(isAnagram)
};

// Using Hash Map
// time: O(n + m)
// space: O(n)
const anagramsHashMap = (s1, s2) => {
  count = {};

  // Iterate over s1 string
  for (let char of s1) { // (n)
    // If char is not in count object
    if (!(char in count)) {
      // Initialize
      count[char] = 0;
    }
    // increment current count on every interation
    count[char]++;
  }

  // Iterate over s2 string
  // Reduce char from count
  for (let char of s2) { // (m)
    // if char is inside of count
    if (char in count) {
      // decrement char count
      count[char]--; 
    } else {
      // if not in the count, return false
      return false;
    }
  }

  // Iterate over keys of count
  for (let char in count) { // (n)
    if (count[char] !== 0) return false;
  }
  return true;
}




// anagrams('restful', 'fluster'); // -> true

// anagrams('cats', 'tocs'); // -> false

// anagrams('monkeyswrite', 'newyorktimes'); // -> true

// anagrams('paper', 'reapa'); // -> false

// anagrams('elbow', 'below'); // -> true

// anagrams('tax', 'taxi'); // -> false

// anagrams('taxi', 'tax'); // -> false

// anagrams('night', 'thing'); // -> true

// anagrams('abbc', 'aabc'); // -> false


anagramsHashMap('restful', 'fluster'); // -> true

// anagramsHashMap('cats', 'tocs'); // -> false

// anagramsHashMap('monkeyswrite', 'newyorktimes'); // -> true

// anagramsHashMap('paper', 'reapa'); // -> false

// anagramsHashMap('elbow', 'below'); // -> true

// anagramsHashMap('tax', 'taxi'); // -> false

// anagramsHashMap('taxi', 'tax'); // -> false

// anagramsHashMap('night', 'thing'); // -> true

// anagramsHashMap('abbc', 'aabc'); // -> false
