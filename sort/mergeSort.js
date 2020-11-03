//归并排序demo


const mergeSort = arr =>{
    let length = arr.length;
    if (length < 2) {
        return arr;
    }
    let mid = Math.floor(length / 2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

const merge = (leftArr,rightArr)=>{
    let result = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            result.push(leftArr.shift());
        }else{
            result.push(rightArr.shift());
        }
    }
    while(leftArr.length){
        result.push(leftArr.shift());
    }
    while(rightArr.length){
        result.push(rightArr.shift());
    }

    return result;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr :', mergeSort(arr));
console.timeEnd('归并排序耗时');