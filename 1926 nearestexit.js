// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

// maze: (1-char) string[][]
// entrance: [number, number] <- row, col

var nearestExit = function (maze, entrance) {
	// make a queue
	// make a "seen" list
	// count steps
	const queue = [["take", "step"], entrance];
	const seen = new Set(); // store values as "rowNum, colNum"
	let steps = 0;
	let isEntrance = true;
	const height = maze.length;
	const width = maze[0].length;
	// maze[i][j] i=row, j=col
	// while queue isn't empty:
	while (queue.length > 1) {
		const [row, col] = queue.pop();
		// if we've exhausted all optiosn for taking 1 step, re-assemble the queue
		if (row == "take" && col == "step") {
			steps += 1;
			queue.unshift(["take", "step"]);
			continue;
		}
		// exit if we can, return steps
		// we're at an exit if the row is at the edge, if the cols are at the edge, if we aren't doing an entrance
		if (
			(row == 0 || row == height - 1 || col == 0 || col == width - 1) &&
			!isEntrance
		) {
			return steps;
		}
		isEntrance = false;
		seen.add(`${row},${col}`);
		// look at all adjacent squares, add them to queue if they're legal (aren't 1. seen or 2. a wall or 3. outside of maze limits)
		const potentialSquares = [
			[row - 1, col],
			[row + 1, col],
			[row, col - 1],
			[row, col + 1],
		];
		for (const [nr, nc] of potentialSquares) {
			if (
				seen.has(`${nr},${nc}`) ||
				nr >= height ||
				nr < 0 ||
				nc >= width ||
				nc < 0 ||
				maze[nr][nc] == "+"
			) {
				// console.log("fail");
				continue;
			} else {
				queue.unshift([nr, nc]);
			}
		}
	}

	// if our queue is empty, we're stuck (return -1)
	return -1;
};

const maze = [
	["+", "+", "+"],
	[".", ".", "."],
	["+", "+", "+"],
];
const entrance = [1, 0];

console.log(nearestExit(maze, entrance));
