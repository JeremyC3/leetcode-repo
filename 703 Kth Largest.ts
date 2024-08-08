class KthLargest {
  //make subclass for heaping shit together, with binary trees
  //function for adding to the tree
  //constructor is empty/starts with just 1
  root:HeapNode

    constructor(k: number, nums: number[]) {
      //point the root to one value
      this.root = new HeapNode(nums[0])
      // now do a bunch of ugly adding
      for(let i=1; i<nums.length; i++){
        
      }

    }

    add(val: number): number {
      
      this.heapAdd(val)
      return 69
    }
    heapAdd(val:number){
      const newNode = new HeapNode(val)
      //check if the value is the new biggest
      if(val > this.root.value){
        newNode.left = this.root
        this.root = newNode
      }

      // check if left is empty, add to left.
      // check if right is empty, add to right.
      // if neither are empty,
        // check if your value is bigger or smaller than each node
          // if your value is smaller than both move on to the biggest node?
          // if your value is bigger than both, insert on top @ the biggest value?
          // if your value is bigger than just one, move down into the smaller node
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class HeapNode{
  left:null|HeapNode
  right:null|HeapNode
  value:number
  constructor(num :number){
    this.left = null
    this.right= null
    this.value = num
  }
}