let arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
let cache = {};
let results = [];
for (let i = 0; i < arr.length; i++) {
    if(cache[arr[i]] === true){
        results.push(arr[i]);
    }else{
        cache[arr[i]] = true;
    }

}
console.log(results);

// [9, 4]
