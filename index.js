var graph = [
    {from: "a", to: "b", cost: 4},
    {from: "a", to: "c", cost: 5},
    {from: "a", to: "d", cost: 2},
    {from: "b", to: "c", cost: 2},
    {from: "b", to: "d", cost: 3},
    {from: "b", to: "e", cost: 2},
    {from: "c", to: "f", cost: 6},
    {from: "d", to: "e", cost: 6},
    {from: "e", to: "f", cost: 4},
];

// Map(['a', [{to: '', cost: }, {to: '', cost: }])
function createHashMap (tree) {
    const hashMapHraph = new Map();

    for (let value of tree) {
        const { from, to, cost } = value;
        const curToArray = hashMapHraph.get(from);

        if (curToArray) {
            curToArray.push({to, cost })
        } else {
            hashMapHraph.set(from, [{to, cost }])
        }
        
    }

    return hashMapHraph;
}

function getPath (parentCheapest, from, to) {
    const path = [to];

    while (path[path.length - 1] !== from) {
        const lastItem = path[path.length - 1];
        path.push(parentCheapest.get(lastItem))
    }

    return path.reverse();
}

function deixtra(tree, from, to) {
    const parentCheapest = new Map();
    const pointsCheapest = new Map();
    const visited = new Set();
    let currrentCheapestKey = from;
    let currrentCheapestValue = 0;
    const hashMapTree = createHashMap(tree);

    while (currrentCheapestKey && currrentCheapestKey !== to) {
        visited.add(currrentCheapestKey);
        const children = hashMapTree.get(currrentCheapestKey) || [];

        for (let child of children) {
            const currentPrice = currrentCheapestValue + child.cost;
            const valueInMap = pointsCheapest.get(child.to)
            const shouldWriteInMap = !valueInMap || currentPrice < valueInMap;

            if (shouldWriteInMap) {
                pointsCheapest.set(child.to, currentPrice);
                parentCheapest.set(child.to, currrentCheapestKey);
            }
        }

        currrentCheapestValue = +Infinity;
        currrentCheapestKey = null;
        
        for (let [key, value] of pointsCheapest) {
            if (visited.has(key)) {
                continue;
            }
            if (value < currrentCheapestValue) {
                currrentCheapestValue = value;
                currrentCheapestKey = key
            }
        }
    }

    if (currrentCheapestKey === to) {
        return getPath(parentCheapest, from, to);
    } else {
        return [];
    }
}

console.log(1)
console.log(deixtra(graph, "a", "e"))