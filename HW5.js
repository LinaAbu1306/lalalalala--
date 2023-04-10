//Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, 
//которое вы передаете в функцию.

function daysOfTheweek(o, a = "Dream Team,", c = 'Tomorrow is', d = ',ew!!!' ){
    console.log(a,c,o,d)
}
let o = "Monday"
daysOfTheweek(o)

//Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
//example:  function calculate(a, b, operator){}

function sum(a, b) {
    return a + b
}
function substact (a, b) {
    return a - b
}
function multiply (a, b){
    return (a* b)
}
function divide (a,b){
    if (b == 0){
        return "division by zero is not allowed. Enter another number"
    } 
    else return a/b
}
console.log(divide(5,5))

///////////
function calc(a, b, sign){
    let result = 0
    if (isNaN(a)|| isNaN(b)) result = "Please enter a number"
    else{
        if (sign == "+") result = sum(a, b)
        else if(sign == "-") result = substact(a, b)
        else if(sign == "*") result = multiply(a, b)
        else if(sign == "/") result = divide (a, b)
    }
    return result
}
console.log(calc(5,10, "*"))