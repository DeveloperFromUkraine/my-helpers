const uniquePairs = pairs => [...new Set(pairs.map(pair => JSON.stringify(pair)))].map(pair => JSON.parse(pair))

uniquePairs([[1,2], [1,1], [2,0], [1,2], [1,1]])
// [[1,2],[1,1],[2,0]]

//==========================================================
var data = [[1,2], [1,1], [2,0], [1,2], [1,1]];

var dataUnique = data.reduce(function (out, item) {
    return out.concat(out.filter(function (comp) {
        return item.toString() == comp.toString();
    }).length ? [] : [item])
}, []);

console.log(data, dataUnique);

// [[1,2], [1,1], [2,0], [1,2], [1,1]]
// [[1,2], [1,1], [2,0]]
