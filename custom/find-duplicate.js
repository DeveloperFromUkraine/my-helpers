const a = [4,3,6,3,4,3]

function count_duplicate(a){
    let counts = {}

    for(let i =0; i < a.length; i++){
        if (counts[a[i]]){
            counts[a[i]] += 1
        } else {
            counts[a[i]] = 1
        }
    }
    console.log(counts)
}

count_duplicate(a)
//{3: 3, 4: 2, 6: 1}
