var calculator = {
    'num1': 0,
    'num2': 0,
    'res': 0,
    'sum': function() {
        this.res = this.num1 + this.num2;
        return this.res;
    },
    'mul':function(){
        this.res=this.num1 * this.num2;
        return this.res;
    },
    'div':function(){
        this.res=this.num1 / this.num2;
        return this.res;
    },
    'sub':function(){
        this.res=this.num1 - this.num2;
        return this.res;
    }
};
calculator.num1=prompt("enter 1st number:");
calculator.num2=prompt("enter 2nd no.");
var num=prompt("enter choice 1=sum|2=mul|3=div|4=div");
if(num==1){
var add=calculator.sum();
console.log(add);
}
else if(num==2){
    var multi=calculator.mul();
    console.log(multi);
}
else if(num==3){
    var divide=calculator.div();
    console.log(divide);
}
else{
    var diff=calculator.sub();
    console.log(diff);
}
