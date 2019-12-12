function maxSubarraySum(arr,num){
    if(arr.length<num) return null;
    let total = 0;
    for(var i = 0; i < num;i++){
        total += arr[i];
    }
    let currentTotal = total;
    for(var i = num; i < arr.length;i++){
        currentTotal+=arr[i]-arr[i-num];
        total=Math.max(total,currentTotal);
    }
    return total;
}
let arr=[100,200,300,400];
let num = 2;
console.log(maxSubarraySum(arr,num));