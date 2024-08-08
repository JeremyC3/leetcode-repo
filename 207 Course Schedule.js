/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function (numCourses, prerequisites) {
	// return false if a course has a pre-req that is impossible
	// declare something here to store this info
	const courses = Array(numCourses);
	for (let i = 0; i < numCourses; i++) {
		courses[i] = [];
	}
	for (const [c, p] of prerequisites) {
		courses[c].push(p);
	}
  const seen = new Set();
  const dfs = (course)=>{
    if (seen.has(course)){
      return false
    }
    if (courses[course]== []){
      return true
    }
    //add the course to the seen list
    seen.add(course)
    // if any of the children fail then immediately bail
    for(const pre of courses[course]){
      if (!dfs(pre))return false
    }
    // if we manage to make it through this course, it's safe and can be seen again
    courses[course] = []
    seen.delete(course)
    return true
  }
  // dfs through each course
  for (let i=0; i<numCourses; i++){
    if (!dfs(i)) return false
  }
  return true
};
var badcanFinish = function (numCourses, prerequisites) {
	// return false if a course has a pre-req that is impossible
	// declare something here to store this info
	const courses = Array(numCourses);
	for (let i = 0; i < numCourses; i++) {
		courses[i] = [];
	}
	for (const [c, p] of prerequisites) {
		courses[c].push(p);
	}
	// [[],[]]
	console.log(courses);
	const safeCourses = new Set();
	for (let i = 0; i < numCourses; i++) {
		// if (seen.has(i)) continue;
		const preCourse = [...courses[i]];
		// if there is ever any value in preCourse that == i, return false
		// console.log(`course ${i} with the precourses of ${preCourse.length}`, preCourse);
		let reps = 0;
		const seen = new Set();
		seen.add(i);
		while (preCourse.length > 0 && reps < 20) {
			reps++;
			const curr = preCourse.pop();
			console.log(`checking ${curr} against original value ${i}`);
			// console.log(courses[curr]);
			if (safeCourses.has(curr) || courses[curr].length == 0) {
				// console.log(safeCourses + "safe")
				seen.delete(curr);
				safeCourses.add(curr);
				continue;
			}
			// 3 conditions: 1 we've visited and remove it
			// 2 we haven't visited yet,
			if (seen.has(curr)) {
				console.log(curr);
				return false;
			}
			seen.add(curr);
			if (courses[curr] != undefined) {
				preCourse.push(...courses[curr]);
			}
		}
		safeCourses.add(i);
	}
	// if you look through all pre-reqs without an issue, return true
	return true;
};

// console.log(
//   canFinish(3, [
//     [0, 1],
//     [0, 2],
//     [1, 2],
//   ]),
// );
// console.log(canFinish(4, [[0,1], [3,2],[2, 1], [3,0]]))
console.log(
	canFinish(7, [
		[1, 0],
		[0, 3],
		[0, 2],
		[3, 2],
		[2, 5],
		[4, 5],
		[5, 6],
		[2, 4],
	])
);

// // numCourses = 4 [[0,1], [3,2],[2, 1], [1, 3]] // can this work bc of the order?
// courses = [[1],[3],[1],[2]] // (course 0 needs prereq of 1 & 3)
//  i =0 // what courses do I need to take course 0

// precourse = courses[0]= [1, 3]
// curr = [3]
// if curr = i return false
