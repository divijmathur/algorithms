function pivot(arr,start=0,end=arr.length-1){
    const swap = (arr,idx1,idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
    }
    var pivot = arr[start];
    var swapIdx = start;
    for(var i = start + 1;i<= end;i++){
        if(pivot>arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr,left = 0, right=arr.length-1){
    if(left<right){
    let pivotIndex = pivot(arr,left,right)
    quickSort(arr,left,pivotIndex-1)
    quickSort(arr,pivotIndex+1,right)
    }
    return arr;
}

let arr = [9,3,5,4,6,1,2];
console.log(quickSort(arr));