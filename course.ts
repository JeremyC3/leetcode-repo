// in order for prereq to be finished, you need to have taken the prev class
// first step is to turn it into a dict, key = course num, prereqs is other arr
// for each position, check if the courses are in the completed dict or not
function ifCanFinish(numCourses: number, prerequisites: number[][]): boolean {
	const courseDict: Record<number, number[]> = {};
	// prefill dict with empty values to save time later
	const safeCourses: Set<number> = new Set();
	for (let i = 0; i < numCourses; i++) {
		courseDict[i] = [];
		safeCourses.add(i);
	}
	// build the dict
	for (const [curr, pre] of prerequisites) {
		courseDict[curr].push(pre);
		safeCourses.delete(curr);
	}
	// now, we want to iterate through each course and see what can be taken
	const checkCourse = (num: number, seen = new Set()) => {
		for (const pre of courseDict[num]) {
			console.log(pre);
			if (safeCourses.has(pre)) {
				continue;
			}
			// first, check if the course has been seen yet
			if (seen.has(pre)) {
				console.log("seen the num before", pre);
				return false;
			}
			// then add the course
			seen.add(pre);
			// then run the comparisons
			if (!checkCourse(pre, seen)) {
				return false;
			}
		}
		safeCourses.add(num);
		return true;
	};
	// the issue is if a course loops in a circle
	console.log(courseDict);
	// circle loops will happen if a prereq links back to an already explored point
	for (let i = 0; i < numCourses; i++) {
		if (!checkCourse(i)) {
			return false;
		}
	}
	// [0, [1, 2]], [1, [2]] [2 []]
	return true;
}
const num = 8;
const pre = [
	[1, 0],
	[2, 6],
	[1, 7],
	[6, 4],
	[7, 0],
	[0, 5],
];

console.log(ifCanFinish(num, pre));
