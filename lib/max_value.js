function maxValue(node) {
    // queue initialized w/ startingNode
    let queue = [node];
    // visited new Set
    let visited = new Set();
    // initialize max value
    let max = -Infinity;

    // loop
    while (queue.length) {
        // grab current node off queue
        let currNode = queue.shift()
        // if value is in visitedSet, continue
        if (visited.has(currNode)) continue;
        // is currNode > max, reassign max
        if (currNode.val > max) max = currNode.val
        // if no, push currNode neighbors to queue
        queue.push(...currNode.neighbors);
        // add currNode to visited
        visited.add(currNode);
    }

    // return max
    return max
}

module.exports = {
    maxValue
};