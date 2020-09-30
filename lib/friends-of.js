/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function friendsOfRecursion(name, adjList, visited, maxDist, currDist) {
  // base case, no further recursion necessary
  if (!currDist) return;

  // add each friend to visted Set, repeat recursively for friends of friends
  adjList[name].forEach(friend => {
    visited.add(friend);
    // decrement currDist until base case is met
    friendsOfRecursion(friend, adjList, visited, maxDist, currDist - 1);
  });

  return visited;
}

function friendsOf(adjList, name, distance) {
  // if friendsList is empty or seed name is not included, return undefined 
  if (!Object.keys(adjList).includes(name)) return undefined;
  const visited = new Set();

  // make first recursive call, passing in seed name,
  // no way to remove seed name without helper recursive function
  friendsOfRecursion(name, adjList, visited, distance, distance)

  // remove seed name from collection
  if (visited.has(name)) visited.delete(name);
  return Array.from(visited);
}

/******************************************************************************
* Do not change code beneath this line.
*/
try {
exports.friendsOf = friendsOf;
} catch (e) {
exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
