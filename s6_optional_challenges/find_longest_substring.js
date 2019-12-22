/*

Sliding Window - Find Longest Substring

Write a function called findLongestSubstring which accepts
a string and returns the length of the longest substring
with all distinct characters.

Constraints:
  Time - O(n)

*/
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for(let i = 0; i < str.length; i++)
  {
    let char = str[i];
    if(seen[char])
    {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}




// test cases
const test_cases =
[
  "", // 0
  "rithmschool", // 7
  "thisisawesome", // 6
  "thecatinthehat", // 7 (hecatin)
  "bbbbbb", // 1
  "longestsubstring", // 8
  "thisishowwedoit", // 6
];

for(let test_case of test_cases)
{
  console.log(findLongestSubstring(test_case));
}
