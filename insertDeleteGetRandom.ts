class RandomizedSet {
    private randomSet: Map<any, any>;
    private valuesArray;
    constructor() {
      this.randomSet = new Map();
      this.valuesArray = [];
    }
  
    insert(val: number): boolean {
      if (this.randomSet.has(val)) {
        return false;
      }
      console.log(this.randomSet.size);
      let index = this.randomSet.size;
      index;
      this.randomSet.set(val, index);
      this.valuesArray[index] = val;
      console.log(this.randomSet);
      return true;
    }
  
    remove(val: number): boolean {
      console.log(this.randomSet);
      if (!this.randomSet.has(val)) {
        return false;
      }
      let indexToDelete = this.randomSet.get(val);
      indexToDelete;
      console.log(this.randomSet.size);
  
      this.randomSet.delete(val);
      this.valuesArray[indexToDelete] = this.valuesArray[this.randomSet.size];
      this.randomSet.set(this.valuesArray[indexToDelete], indexToDelete);
      console.log(this.valuesArray);
      console.log(this.randomSet);
      return true;
    }
  
    getRandom(): number {
      console.log(this.valuesArray);
      console.log(this.randomSet);
      let rand = Math.floor(Math.random() * this.randomSet.size);
      return this.valuesArray[rand];
    }
  }
  
  /**
   * Your RandomizedSet object will be instantiated and called as such:
   * var obj = new RandomizedSet()
   * var param_1 = obj.insert(val)
   * var param_2 = obj.remove(val)
   * var param_3 = obj.getRandom()
   */
  let obj = new RandomizedSet();
  console.log(obj);
  console.log(obj.insert(1));
  console.log(obj.insert(2));
  console.log(obj.insert(4));
  console.log(obj.remove(2));
  console.log(obj.insert(2));
  // console.log(obj.insert(2));
  console.log(obj.getRandom());
  