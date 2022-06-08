/*
  https://leetcode.com/problems/roman-to-integer/
  
 Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

let romNum: string = "III"
let toNum: Function = (romNum: string): number | undefined => {
    // let symbols: { letr: string, value: number, count: number }[] = []
    let symbols: { [k: string]: any } = {}
    symbols.I = 1
    symbols.V = 5
    symbols.X = 10
    symbols.L = 50
    symbols.C = 100
    symbols.M = 1000

    let nums: number[] = []
    for (let i = 0; i < romNum.length; i++) {
        if (romNum[i] === "I" && romNum[i + 1] === "V") {
            nums.push(4)
            i++
        }
        else if (romNum[i] === "I" && romNum[i + 1] === "X") {
            nums.push(9)
            i++
        }
        else if (romNum[i] === "X" && romNum[i + 1] === "L") {
            nums.push(40)
            i++
        }
        else if (romNum[i] === "X" && romNum[i + 1] === "C") {
            nums.push(90)
            i++
        }
        else if (romNum[i] === "C" && romNum[i + 1] === "D") {
            nums.push(400)
            i++
        }
        else if (romNum[i] === "C" && romNum[i + 1] === "M") {
            nums.push(900)
            i++
        }
        else nums.push(symbols[romNum[i]])
    }
    return nums.reduce((prevVal, currVal) => prevVal + currVal)
}

console.log(toNum("III")) // should be 3
console.log(toNum("LVIII")) // should be 58
console.log(toNum("MCMXCIV")) // should be 1994
