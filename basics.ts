// console.log("Time for codee...")

function add (n1: number, n2: number, showResult: boolean, pharse: string){

    const result = n1 + n2;
    if (showResult){
        console.log(pharse + result);
    }else {
        return result;
    }

    
}

let  number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPharse = "Result is: "
 add(number1, number2, printResult, resultPharse);

