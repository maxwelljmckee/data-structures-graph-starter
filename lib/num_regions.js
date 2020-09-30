function numRegions(graph) {
  // set up a variable to track vertices we've visited
  let visited = new Set();
  // initialize a counter to track the number of times we jump to new regions
  let counter = 0;

  // loop through node values in graph
  for (let node in graph) {
      // if the visited set doesn't have this node value, add it & increment
    if (!visited.has(node)) {
      visited.add(node);
      counter++;
    }
    // run through all the neighbors of that node to visited, so they won't
    // trigger the if statement above & skip those neighbors that have already
    // been added (return statement on 18)
    graph[node].forEach((neighbor) => {
      if (visited.has(neighbor)) return;
      visited.add(neighbor);
    });
  }
  // return the count of new regions
  return counter;
}
module.exports = {
  numRegions,
};
