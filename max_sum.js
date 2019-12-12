function maxSubarraySum(arr,num){
    let tempSum = 0;
    let maxSum = 0;
    for(var i = 0; i < num;i++){
        maxSum+=arr[i];
    }
    tempSum=maxSum;
    for(var i = num; i < arr.length;i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum=Math.max(maxSum,tempSum);
    }
    return maxSum;
}




let arr = [2,6,9,2,1,8,5,6,3]
let num = 4;
console.log(maxSubarraySum(arr,num));