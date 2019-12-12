describe("pow",function(){
    function makeTest(x){
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`,function(){
            assert(pow(x,3),expected)
        });
    }
    for(let x = 1; x<= 5;x++){
        makeTest(x);
    }
        it("for negative result is NAN", function(){
            assert.isNan(pow(2,-1));
        });
        it("for negative result is NAN", function(){
            assert.isNan(pow(2,-1.5));
        });
    
});