// 1 ADD


function add(a, b) {
    return a + b
}

// 2 MULTIPLY

function multiply(c,d){
    let multResult = 0
    let multTotal = 0
    for (let count=1; count <= d; count +=1){
        multResult = add(multTotal,c)
        multTotal = multResult
    }
return multTotal
}
// 3 Power/Exponentiation

function power(x,p){
    let pwrResult = 0
    let pwrTotal = 1

for (let index=1; index <= p; index += 1){
        pwrResult = multiply(pwrTotal,x)
        pwrTotal = pwrResult
    }
    return pwrTotal
}

// 4. Factorial

function factorial(f){
    let factResult = 0
    let factTotal = f
    
    for (let index=f-1; index >= 1; index -= 1){
            factResult = multiply(factTotal,index)
            factTotal = factResult
        }
        
    return factTotal
}
// Bonus: Fibonacci

function fibonacci(n){
    let fibResult = 0
    let fibTotal = 0
    let fibnum1 = 0
    let fibnum2 = 1

    if (n === 1){ 
        console.log ("0 is in the 1st position")
    } else if (n === 2){
        console.log ("1 is in the 2nd position")
    } else
        for (let index = 3; index <= n; index +=1){
            fibResult = add(fibnum1,fibnum2)
            fibTotal = fibResult
            fibnum1 = fibnum2
            fibnum2 = fibResult
        }
    return fibTotal
  
    }    
