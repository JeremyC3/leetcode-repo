/**
 * Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

 */

class NodeTS {
	val: number;
	neighbors: NodeTS[];
}

function cloneGraph(node: NodeTS | null): NodeTS | null {
	if (node == null) {
		return null;
	}
	const seen: Record<number, NodeTS> = {};
	// iterate through the entire
	const dfs = (curr: NodeTS) => {
		if (seen[curr.val] != undefined) {
			return seen[curr.val];
		}
		const newNode = new NodeTS();
		newNode.val = curr.val;
		newNode.neighbors = [];
		for (const neighbor of curr.neighbors) {
			newNode.neighbors.push(dfs(neighbor));
		}
		return newNode;
	};
	return dfs(node);
}
