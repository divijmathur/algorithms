function areThereDuplicates() {
    return new Set(arguments).size!==arguments.length;
}

console.log(areThereDuplicates('1','2','3'));
console.log(areThereDuplicates('1','1','1'));