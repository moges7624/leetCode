/**
 * 
 https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150
 
 Implement the RandomizedSet class:
  -> RandomizedSet() Initializes the RandomizedSet object.
  -> bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, 
  false otherwise.
  -> bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, 
  false otherwise.
  -> int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least 
  one element exists when this method is called). Each element must have the same probability of being returned.
  You must implement the functions of the class such that each function works in average O(1) time complexity.

  Example 1:
    Input
    ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
    [[], [1], [2], [2], [], [1], [2], []]
    Output
    [null, true, false, true, 2, true, false, 2]

    Explanation
    RandomizedSet randomizedSet = new RandomizedSet();
    randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
    randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
    randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
    randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
    randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
    randomizedSet.insert(2); // 2 was already in the set, so return false.
    randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
 

 Constraints:

  -231 <= val <= 231 - 1
  At most 2 * 105 calls will be made to insert, remove, and getRandom.
  There will be at least one element in the data structure when getRandom is called.
 */



/**
 Intuition
The problem requires us to make 3 functions insert, remove and getRandom in constant time. When I first viewed the problem along with O(1) a map is the first thing that came to mind, and then to get a random number I would need to have an array.

Approach
In order to solve this problem I will be using a map and an array. I'll be using the map to store the val as a key and the array index as the value against the key. The array will only be used to fetch the random values.
The following approach was used for each individual function:

insert: In order to insert a value we will need to insert it to the end of the array and also insert it in the map along with the index in the array where we are storing the value.
remove In order to remove a value we will need to swap the last element in the array with the value we are going to delete. We will also need to update the index for the last element in the map. Then we can pop the last element in the array which will be our value and also delete it from the map.
getRandom In order to get a random number all we have to do is use the javascript Math.random function to generate a number between 0 (inclusive) and 1 (exclusive). Then we can multiply it by the length of our array and get the floor of that number to get a random index to access. We can then return the value at this index in the array.
swap This is a utility function used to swap positions of two elements in an array.
Complexity
Time complexity:

insert - O(1)
remove - O(1)
getRandom - O(1)
Space complexity: O(n)
 */

class RandomizedSet {
  private readonly map: Map<number, number>;
  private readonly elements: number[];

  private swap(nums: number[], index1: number, index2: number): void {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
  }

  constructor() {
    this.map = new Map();
    this.elements = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;

    this.map.set(val, this.elements.length);
    this.elements.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;

    const indexToRemove = this.map.get(val) as number;
    const lastIndex = this.elements.length - 1;

    this.map.set(this.elements[lastIndex], indexToRemove);
    this.swap(this.elements, indexToRemove, lastIndex);

    this.elements.pop();
    this.map.delete(val);
    
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomIndex];
  }
}