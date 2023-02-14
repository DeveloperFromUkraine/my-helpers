list = list.filter((x, i, a) => a.indexOf(x) == i)
// ====================================================================================
Array.prototype.getUnique = function() {
    return [...new Set( [this] )];
};
// ====================================================================================
[...new Set( [1, 1, 2] )];
// ====================================================================================
function deduplicate(data = [1,1,2,2,3,4,5,6,7]) {
    if (data.length > 0) {
        var result = [];

        data.forEach(function (elem) {
            if (result.indexOf(elem) === -1) {
                result.push(elem);
            }
        });

        return result;
    }
}

console.log(deduplicate());
