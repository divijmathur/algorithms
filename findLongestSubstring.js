function findLongestSubstring(str) {
    let longest = 0;
    let start = 0;
    let seen = {};
    for(var i = 0; i < str.length;i++){
        let char = str[i];
        if(seen[char]){
            start = Math.max(start,seen[char])
        }
        longest=Math.max(longest,i-start+1);
        seen[char]=i+1;
    }
    return longest;
}
let str = 'thisishowwedoit';
console.log(findLongestSubstring(str));