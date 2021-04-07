//Factorial
//n! = n * (n-1)!

function factorial(n) {
    if(n <= 0) {
        return 0;
    }
    else if(n === 1) {
        return 1;
    } else {
        return n* factorial(n-1);
    }
}

for(let i=1; i<=10; i++) {
    console.log(`factorial of ${i} is ${factorial(i)}`);
}