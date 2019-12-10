/*

Frequency Counter - Anagram Challenge

Given two strings, write a function to determine if the
second string is an anagram of the first.  An anagram is
a word, phrase, of name formed by rearranging the
letters of another, such as 'cinema', formed from 'iceman'.

*/

function validAnagram(s1, s2)
{
  // check if both strings are the same length
  if(!(s1.length === s2.length))
  {
    console.log(false);
    return false;
  }

  // store chars in objects
  frequencyCounter1 = {};
  frequencyCounter2 = {};

  // add chars to frequency counters
  for(let char of s1)
  {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for(let char of s2)
  {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }


  // make sure frequencyCounter objects are equal
  for(let key in frequencyCounter1)
  {
    if(!(frequencyCounter1[key] === frequencyCounter2[key]))
    {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}





// test cases
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
