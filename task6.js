/*In a try catch construction, wrap the code: console.log (a), 
let a = 3. And display an error - ‘let must be declared’ before use.
When running 1/0, the error 'cannot be divided by zero'*/

function task1(){
    try {
        console.log(a);
    } catch {
        console.log('let must be declared');
    } finally{
        let a =3;
        console.log(a);
    }
}
task1();
function task2(){
    try {
        console.log(1/0);
    } catch {
        console.log('Cannot divide by zero!');
    } finally{
        console.log('Try catch cannot catch this error!');
    }
}
task2();