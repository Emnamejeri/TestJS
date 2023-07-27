//Write a function that accepts a string as an argument and returns the most frequent word. Requirements:
//If a string is not provided, throw a TypeError error asking for string.
//If the string contains no words, return null.
//Ignore numbers, all non-latin characters and the following words: 'the', 'an', 'a', 'of', 'and', 'or', 'but'.
//Treat every word as lowercase (so "Word" = "word").
//If there is a tie, return the word that appears first in the string.
//Example:const text = ' The quick brown fox jumped over the lazy Dog. The dog, seeing the Fox jump,jumped over the Moon. The Moon was big and blue. '
//getMostFrequentWord(text) // 'fox'

// Set is also an option
const wordsIgnored = ["the", "an", "a", "of", "and", "or", "but"];

// Solution
function mostFrequentWord(string) {
  if (typeof string !== "string") {
    throw new TypeError("Input must be a string");
  }

  const words = string
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ")
    .trim()
    .replace(/\s{2,}/g, "")
    .split(" ")
    .filter((word) => !wordsIgnored.includes(word));

  // Map is also an option
  const wordCounts = {};

  // forEach, reduce are possible alternatives
  for (const word of words) {
    // using ternary operator instead of an if statement
    wordCounts[word] = wordCounts[word] ? wordCounts[word] + 1 : 1;
  }

  let maxCount = 0;
  let maxWord = "";

  for (const word in wordCounts) {
    if (wordCounts[word] > maxCount) {
      maxCount = wordCounts[word];
      maxWord = word;
    }
  }

  // we could also use ||, ?? or ternary operator instead
  if (maxWord === "") return null;

  // an alternative solution would be to use Math.max(...Object.values(wordCount)) and
  // then words.find to find the key that corresponds to the max value
  return maxWord;
}
