function sameFrequency(num1,num2) {
    let stringNum1 = num1.toString();
    let stringNum2 = num2.toString();
    if(stringNum1.length!==stringNum2.length) return false;
    let countNum1={};
    let countNum2={};
    for(var i = 0; i < stringNum1.length;i++){
        countNum1[stringNum1[i]] = (countNum1[stringNum1[i]]|| 0)+1;
    }
    for(var i = 0; i < stringNum2.length;i++){
        countNum2[stringNum2[i]] = (countNum2[stringNum2[i]]|| 0)+1;
    }
    for(let key in countNum1){
        if(countNum1[key]!==countNum2[key]) return false;
    }
    return true;
}


s
console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(22,222));
console.log(sameFrequency(9578,8579));