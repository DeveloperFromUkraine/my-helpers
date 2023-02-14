export function reduce(arr, initValue, fn) {
    let recalculate = (array, acc) => {
        if (!array.length) {
            return acc;
        }

        const firstElement = array[0];
        const secondValue = array.slice(1);
        const nextAccumulate = fn(acc, firstElement);

        return recalculate(secondValue, nextAccumulate);
    };

    if (initValue) {
        return recalculate(arr, initValue);
    }

    return recalculate(arr.slice(1), arr[0]);
}
