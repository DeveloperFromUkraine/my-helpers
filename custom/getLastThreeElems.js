const input = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 4,
                next: {
                    data: 5,
                    next: null
                }
            }
        }
    }
};

let lastElements = [];
function getLastThree(input) {
    Object.entries(input).forEach(([key, value]) => {
        if(key === 'next' && value !== null) {
            getLastThree(value);
        } else if( key === 'data' ) {
            lastElements.push({[key]: value });
            if(lastElements.length > 3){
                lastElements.shift();
            }
        }
    })
    return lastElements
}
console.log('getLastThree', getLastThree(input));
