function averagePair(arr,num){
    let start = 0;
    let end = arr.length-1;
    while(start<end){
        let avg = (arr[start]+arr[end])/2;
        if(avg==num) return true;
        else if (avg<num) start++;
        else end--;
    }
    return false;
}





let arr = [1,2,3,4,5]
let num = 2.5;
console.log(averagePair(arr,num));