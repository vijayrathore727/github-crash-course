function add(a, b) {
    console.log('adding'+a+b)
}


function multiple(a, b){
    console.log('multiplying'+a*b);
}

function divide(a, b){
        console.log('Dividing'+a/b);
}

function factorial(n){
    if(n === 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}