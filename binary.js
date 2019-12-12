function search(array,val){
    let min = 0;
    let max = array.length-1;
    while(min<=max){
        let middle = Math.floor((max+min)/2);
        let currentElement = array[middle];
        if(currentElement<val){
            min = middle + 1;
        } else if (currentElement>val){
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let val = 10;
console.log(search(array,val));

// [1,2,3,4,5]; val = 5;
// min = 0 then min = 3 then min = 4
// max = 4 middle = 2 then middle=3 then middle=4, currentElement = 3;