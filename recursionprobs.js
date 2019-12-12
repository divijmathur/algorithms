function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length===2) return str[0]===str[1];
    if(str[0]===str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

function flatten(arr){
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr.concat(flatten(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function capitalizeFirst(array){
    if(array.length===1){
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0,-1));
    const string = array.slice(array.length-1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}

let array = ['car','taco','banana'];
console.log(capitalizeFirst(array));

function capitalizeFirstWords(array){
    if(array.length===1){
        return [array[0].toUpperCase()];
    }
    let res = capitalizeFirstWords(array.slice(0,-1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
}