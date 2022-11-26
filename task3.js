//task 1
const movies = ['Inception', 'Defendor', 'The Dark Knight', 'Interstellar']

movies.forEach((name, index) => {
    return console.log(`Index: ${index} Name: ${name}`);
});

//task 2
const cars =['Volvo', 'Mini', 'Mazda', 'BMW']

let carString = cars.toString();
console.log(carString);

let newCars = carString.split(',');
console.log(newCars);

//task 3
const friends = ['Jack', 'Lilly', 'Ann']

let hello = friends.forEach((name) =>{
    return console.log(`hello ${name}`)
});

//task 4
const numbers = [2,3,1,4,6,7,9];
let newArr=[];
for (let i=0; i<=numbers.length; i++){
    if (numbers[i] % 2 == 0){
        newArr[i] = true;
    }else{
        newArr[i] = false;
    }
}
console.log(newArr);

//task 5
const sortArr =  [1,6,7,8,3,4,5,6];
sortArr.sort();
console.log(sortArr);

//task 6
const filtered = sortArr.filter(currentNum => currentNum ==3);
console.log(filtered);

//task 7
const sevenArr=['A','B','C','D','E'];
function returnArrayByNumber(arr,num){
    return console.log(arr[num]);
};

returnArrayByNumber(sevenArr,4);

//task 8
let count=0;
while(count<=10){
    console.log("a "+count);
    count++;
}

//task 9
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

//task 10
for (let counter = 0; counter <=100; counter++){
    if (counter%2!==0){
        console.log(counter);
    }
}