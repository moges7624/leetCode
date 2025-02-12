/**
 https://leetcode.com/problems/h-index
 Given an array of integers citations where citations[i] is the number of citations a researcher
 received for their ith paper, return the researcher's h-index.

 According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value 
 of h such that the given researcher has published at least h papers that have each been cited at 
 least h times.

    

 Example 1:
    Input: citations = [3,0,6,1,5]
    Output: 3
    Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
    Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

 Example 2:
    Input: citations = [1,3,1]
    Output: 1
    

 Constraints:
    n == citations.length
    1 <= n <= 5000
    0 <= citations[i] <= 1000
 */


// Solution 1 (best solution) (nlogn + n)
function hIndex(citations: number[]): number {
    citations.sort((a,b) => b-a);
    for (let i=0; i<citations.length; i++) {
        if (citations[i] <= i) {
            return i;
        }
    }
    return citations.length;
};

// Solution 2 (n. but takes n+1 more space)
// function hIndex(citations: number[]): number {
//   let counts: number[] = [];

//   for (let index = 0; index < citations.length + 1; index++) {
//     counts[index] = 0;
//   }
//   counts;

//   for (let i = 0; i < citations.length; i++) {
//     if (citations[i] <= citations.length) {
//       counts[citations[i]] = counts[citations[i]] + 1;
//     } else {
//       counts[citations.length] = counts[citations.length] + 1;
//     }
//   }

//   counts;

//   for (let index = counts.length - 1; index >= 0; index--) {
//     console.log(citations.length - (citations.length - index));
//     if (counts[index] >= citations.length - (citations.length - index)) {
//       return citations.length - (citations.length - index);
//     } else {
//       counts[index - 1] = counts[index - 1] + counts[index];
//     }
//   }
//   return 0;
// }


// console.log(hIndex([5, 1, 2, 8, 9, 3])); // 3
// console.log(hIndex([1, 3, 1])); // 1
// console.log(hIndex([0, 0, 1])); // 1
// console.log(hIndex([1])); // 1


