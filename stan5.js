// let str = 'hello'

// function printName(){
//     return "JavaScript"
// }
// let result = printName();
// console.log(printName() + printName ());

// function printName(){
//     return 'Java'
// }

// все что касается ф должно быть в {} в том числе ретерн
//обьявляет то что было обьявлено последним

// let str1 = "Hola"
// console.log(printName()+' '+ printName())

// let result = printName();

// function printName(){
//     return name() + 'Java'
//     function name(){
//         return "hi"
//     }
// }

/////
// let str = "Hola";
// {
// function printName(){
//     let str = 'hey'//будет перезаписана
//     return name() + 'Java' + ' ' + str;// если есть ретерн и после него код то уже не будет выводиться

//     function name(){
//         return "hi"
//     }
// }
// }
// console.log(printName())
// console.log(str)

// let str = "Hello";
//  function printName(){
//  let str = 'hey'//будет перезаписана
//  let num1 =20;
//  let num2 =30;
//  return num1 + num2 + name()
//  function name(){
//     return "hola";
//  }
//  }
//  console.log(printName());
//  console.log (str)

/////
// let str = "Hello";

// function printName(a,b){
//     str = "hey";
//     return a + b + name();
//     function name (){
//         return "hi";
//     }
// }
// function sum(num1, num2){
//     return num1+ num2;
// }

// console.log (printName(10, sum(20,50)))
////////

// let str = "hello";
// function printInfo(){
//     console.log('1');
//     console.log('2');
//     console.log('3');
//     console.log('*');
// }//print this 3 times
// printInfo();
// printInfo();
// printInfo();
///////
//переменной присваиваем функцию, functional expression/variables should be declared prior of using it (console.log)
// var printName = function (name){
//     return `Hello ${name}!`
// }
// var printName = function (name){
//     return `Hi ${name}!`// переменная перезапишется
// }
// console.log(printName('Sam'))//Hello Lina

/////
// Call back это function функция передается как аргумент в другой функции
//однострочная
// const printName = (name) => `Hello ${name}`;
// console.log(printName('Lina'))
///arrow function
const printName = (name) => {
    let greeting = `Hello ${name}`;
    return "Good morning " + greeting
}
console.log(printName('Lina'))