function selectionSort(arr){
    const swap = (arr,idx1,idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for (var j = i + 1; j < arr.length;j++){
            if(arr[lowest]>arr[j]){
                lowest = j;
            }
        }
        if(i!==lowest) swap(arr,i,lowest);
    }
    return arr;
}
let arr = [0,2,34,22,10,19,17];
console.log(selectionSort(arr));


