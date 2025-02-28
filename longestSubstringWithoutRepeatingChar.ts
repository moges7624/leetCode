/**
 https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150

 =>Solution Vid: https://www.youtube.com/watch?v=wiGpQwVHdE0
 Given a string s, find the length of the longest substring without duplicate characters.

 Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

 Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

 Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
 Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
    
 */

// Answer 1
function lengthOfLongestSubstring(s: string): number {
  let charMap = new Map<string, number>();
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (charMap.has(char) && charMap.get(char)! >= left) {
      left = charMap.get(char)! + 1;
    }

    charMap.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

//Answer 2
function lengthOfLongestSubstring2(s: string): number {
  let maxLength = 0;
  let currSubString = new Set<string>();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (currSubString.has(s[right])) {
      currSubString.delete(s[left]);
      left++;
    }

    currSubString.add(s[right]);
    maxLength = Math.max(maxLength, currSubString.size);
  }

  return maxLength;
}
