function operation(x, y, op) {
    
    if(op === "+"){
        let sum = x + y;
        console.log(sum);
    }
    if(op === "-"){
        let dif = x - y;
        console.log(dif)
    }
    if(op === "*"){
        let mult = x * y;
        console.log(mult);
    }
    if(op === "/"){
        let div = x / y;
        console.log(div);
    }
}

console.log(operation(1, 2, '+'))
console.log(operation(1, '2', '-'))
console.log(operation('123', '2', '*'))
console.log(operation('Text', '2', '/')) 


