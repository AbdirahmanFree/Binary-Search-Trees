function mergeSort(array){
    if(array.length <=1){
        return array
    }
    const mid = (array.length /2)
    const left = mergeSort(array.slice(0,mid))
    const right = mergeSort(array.slice(mid))

    return merge((left || []),(right || []))
}

function merge(leftArr,rightArr){
    let array = []
    while(leftArr.length >0 && rightArr.length >0){
        if(leftArr[0] < rightArr[0]){
            array.push(leftArr[0])
            leftArr.splice(0,1)
        }
        else{
            array.push(rightArr[0])
            rightArr.splice(0,1)
        }
    }

    while(leftArr.length > 0){
        array.push(leftArr[0])
        leftArr.splice(0,1)
    }

    while (rightArr.length > 0) {
        array.push(rightArr[0])
        rightArr.splice(0,1)
    }
    return array
    
}

export {mergeSort}