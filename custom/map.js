function myMap(callBack) {
    let arr = [];

    for(let i = 0; i < this.length; i++) {
        arr.push(callBack(this[i]));
    }
    return arr;
};


Array.prototype.myMap = myMap;
