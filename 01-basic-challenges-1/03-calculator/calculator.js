function calculator(a,b,op) {
    switch(op){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        default:
            return Error("Invalid Operator")
    }
}

console.log(calculator(9,4,'^'));
module.exports = calculator; 
