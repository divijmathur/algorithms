function anagram(first,second) {
    if(first.length!==second.length) {
        return false;
    }
    let lookup ={};
    for(var i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(var i = 0; i < second.length;i++) {
        let letter = second[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    console.log(true);
}

let first = 'anagram';
let second = 'nagaram';
anagram(first,second);