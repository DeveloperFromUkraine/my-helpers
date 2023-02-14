const filteredArray = array1.filter(value => array2.includes(value));
// ====================================================================================
var filteredArray = array1.filter(function(n) {
    return array2.indexOf(n) !== -1;
});
// ====================================================================================
es6
function intersect(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
}
// ====================================================================================
function intersect(a, b) {
    var setB = new Set(b);
    return [...new Set(a)].filter(x => setB.has(x));
}
