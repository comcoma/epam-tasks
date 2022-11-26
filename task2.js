//task 1
const carObj = {
    color: 'black',
    power(){
        console.log(200);
    }
}

console.log(carObj.color);
carObj.color='green';
console.log(carObj.color);

carObj.power();

//task 2
function accepted(pears, apples){
    return pears+apples
}
console.log(accepted(12,33));

//task 3
function hello(name){
    if (name == null){
        return 'there is no such name';
    }
    return 'hello ' + name;
}
console.log(hello())

//task 4
function typeOfArg(a,b,c){
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
typeOfArg('hello', 123, false);

//task 5
function isPrime(num){
    result = true;
    if (num > 1){
        for (let i = 2; i<num; i++){
            if (num % i == 0){
                result = false;
                break;
            }
        }
        if(result){
            console.log(num + ' is a prime number!');
        }else{
            console.log(num + ' is not a prime number!');
        }
    }
}

isPrime(7);