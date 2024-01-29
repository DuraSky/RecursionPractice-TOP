function mergeSort(inputArr){
    console.log([inputArr])

    if(inputArr.length <=1){
            return inputArr;
    }else{
        let getEnd = inputArr.length;
        let getMid = getEnd /2;
        let getStart = 0;

        console.log("start index: " + getStart);
        console.log("mid index: " + getMid);
        console.log("end index: " + (getEnd-1));

        console.log(inputArr.slice(getStart,getMid));
        console.log(inputArr.slice(getMid,getEnd));

        let left =  mergeSort(inputArr.slice(getStart,getMid));
        let right = mergeSort(inputArr.slice(getMid,getEnd));

        return merge(left, right);
    }
}

function merge(left, right){
    let sorted = [];
    
    // console.log(`In merge`);
    // console.log("Left: " + left);
    // console.log("right: " + right)

    while (left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift());
        }else{
            sorted.push(right.shift());
        }
    }
    console.log("sorted")
    console.log([...sorted, ...left, ...right])
    return [...sorted, ...left, ...right]
}

mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
mergeSort([105, 79, 100, 110]);

