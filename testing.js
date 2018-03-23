function Add(numStr) {
    if(numStr=== ""){
        return 0;
    }else{
        // var total = 0;
        var string = numStr.split(","); //['1', '5']
        // for(let i=0; i < string.length; i++) {
        //    total += parseFloat(string[i]);
        // }
        // return total

        var sum = string.reduce((prev, current) => parseFloat(prev) + parseFloat(current),0);
        return sum;
    }
}
    //Code Test- Jasmine
    describe ("Add", function(){
        it("should return 0 if an empty string", function(){
            expect(Add("")).toBe(0);
        });

        it("should return the argument if one num", function(){
         expect(Add("4")).toBe(4);
        });

        it("should return sum if two nums", function(){
            expect(Add("1,5")).toBe(6);
        });
    });
