/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // recursively iterate until the end, then start going backwards???
  const unLL = (currList: ListNode | null): number[] => {
    const tempArr: number[] = [];
    while (currList !== null) {
      tempArr.push(currList.val);
      currList = currList.next;
    }
    return tempArr;
  };
  const arr1 = unLL(l1);
  const arr2 = unLL(l2);
  // figure out which group is longer
  const longest = arr1.length > arr2.length ? arr1 : arr2;
  let prevNode: ListNode | null = null;
  while (longest.length > 0) {
    const n1 = arr1.pop() ?? 0;
    const n2 = arr2.pop() ?? 0;
    const newNode = new ListNode(n1 + n2);
    prevNode = newNode;
  }
  return prevNode;
}
