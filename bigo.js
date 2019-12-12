function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <=n ;i++) {
        total += i;
    }
    return total;
}

function addUpTo(n){
    return n * (n+1)/2;
}

// let t1 = performance.now();
// addUpTo(1000000);
// let t2 = performance.now();
// console.log(`Time elapsed: ${(t2-t1)/1000} seconds`);

function countUpAndDown(n) {
    console.log('Going up');
    for (let i = 0; i < n;i++) {
        console.log(i);
    }
    console.log("At the top!\n Going down");
    for (let j = n -1;j>=0;j--){
        console.log(j);
    }
    console.log('Back down bye!');
}

function printAllPairs(n){
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i,j);
        }
    }
}
// printAllPairs(5);
