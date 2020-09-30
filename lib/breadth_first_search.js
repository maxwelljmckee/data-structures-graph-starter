function breadthFirstSearch(startingNode, targetVal) {
    // queue initialized w/ startingNode
    let queue = [startingNode];
    // visited new Set
    let visited = new Set();
    // resNode 

    // loop
    while (queue.length) {
        // grab current node off queue
        let currNode = queue.shift()
        // if value is in visitedSet, continue
        if (visited.has(currNode)) continue;
        // is currNode == target ? if yes return the node
        if (currNode.val === targetVal) return currNode;
        // if no, push currNode neighbors to queue
        queue.push(...currNode.neighbors);
        // add currNode to visited
        visited.add(currNode);
    }
    
    // return null
    return null
}

module.exports = {
    breadthFirstSearch
};