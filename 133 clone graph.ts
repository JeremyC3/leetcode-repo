
// Definition for Node.
type Bode = {
  val: number
 neighbors: Bode[]
}



function cloneGraph(node: Bode | null): Bode | null {
// I like the idea of recursion here in a helper function, and just recursing over until you have everybody?
console.log(node?.val)
// set up a cache of all prev. nodes
const nodeCache: Record<number, Bode> = {}
const parseNode = (newNode:Bode)=>{
  const val = newNode.val;

}
return node
};