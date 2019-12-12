class Interest {
    constructor(p,r,n,t) {
        this.p = p;
        this.r= r;
        this.n = n;
        this.t=t;
    }
    calculate() {
        let amount = 0;
        return amount = this.p*(1+(this.r/this.n))*(this.n/this.t);
    }

    get total() {
        return this.calculate();
    }
}

let crypto = new Interest(101.0029,0.0404,1,1);
console.log(crypto.total);