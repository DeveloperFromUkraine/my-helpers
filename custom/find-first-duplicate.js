const firstDuplicate = (arr) => {
    const hash = new Set([]);

    for (let i = 0; i < arr.length; i++) {
        if (hash.has(arr[i])) {
            return arr[i];
        } else {
            hash.add(arr[i]);
        }
    }
    return -1;
};
