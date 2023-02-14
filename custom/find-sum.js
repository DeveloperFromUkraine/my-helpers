const arr = [7, 0, -4, 5, 2, 3];
const allTwoSum = (arr, target) => {
    const map = {};
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            results.push([target - arr[i], arr[i]]);
        };
        map[target - arr[i]] = true;
    };
    return results;
};
console.log(allTwoSum(arr, 5));
