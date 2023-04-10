// let arr = ["a", "hello", 5, -10, "0", true, "_", false, 8, 9, ["hi", true, 8, "="]]
// let str = "Hi, whats your name?"
// // console.log (arr.length);
// let count = 0;
// let sum = 0;
// // notes console.log(arr[i]) текущий элемент массива
// //        console.log(i) индекс элемента в массиве
// for (let i = 0; i < arr.length; i++){
//     if(typeof arr [i] == "number"){
//         //count = count + 1 //or count ++
//         sum += arr[i]
//         console.log(sum)//выдает сложение числа 5+-10=-5,-5+8=3;3+9=12-прибавляет посл число со сл
//     }
//    // console.log(count)
// }
//вывести четное число
// let arr1 = ["a", "hello", 5, -10, "0", true, "_", false, 8, 9, ["hi", true, 8, "="]]
// for (let i = 0; i < arr1.length; i++){
//     if (i % 2 === 0){
//         console.log(arr1[i])//текущий элемент
//     } else {
//         console.log("index =  " + i)
//     }
// }

//если это строка сложить 
// let str = "";
// let arr2 = ["a", "hello", 5, -10, "0", true, "_", false, 8, 9, ["hi", true, 8, "="]]
// for ( i = 0; i < arr2.length; i++){
//     if (typeof arr2[i]== "string")
//     str += arr2[i]
//     }
//     console.log(str)//текущий элемент

// let str = 0;
// let arr2 = ["123", "hello", 5, "bye", -10, "0", true, "_", false, 8, 9, ["hi", true, 8, "="]]
// for ( i = 0; i < arr2.length; i++){
//     if (typeof arr2[i]== "string"&& arr2[i].length > 3){
//         console.log(arr2[i])
//     }
// }
// вывести стринги с нечетным количеством букв
// let str = 0;
// let arr2 = ["amo", "hello", 5, "bye", -10, "0", true, "_", false, 8, 9, ["hi", true, 8, "="]]
// for ( i = 0; i < arr2.length; i++){
//     if (typeof arr2[i]== "string" & arr2[i].length  % 2 == 1){
//         console.log(arr2[i])
//     }
// }
// let test = 7;
// let test2 = 3;

// if (test < test2){
//     console.log(`${test}<${test2}`);
// } else if ( test > test2 ){
//     console.log(`${test}>${test2}`);
// }else {
//     console.log(`${test}= ${test2}`);
// }
//  со вложенным ифом можно проверить так
//отработал это условие и пошел дальше
// let num1 = 6;
// if (num1 < 3){
//     if (num1 == 1){
//         console.log (`one`)
//     }else {
//         console.log (`two`)
//     }
// }else if (num1 < 5){
//     console.log (`3-4`)
// } else {
//     console.log (`five`);
// }
// console.log(`doing`)


// // let num1 = 1
// // if (num1 < 3){
//     if 
// //     console.log(`1 - 2`);
// // }else if (num1 > 5){
// //     console.log(`3 - 4`);
// // }else {
// //     console.log (`five`)
// // }




// test < test2 ? console.log(`${test}<${test2}`):test > test2 ? console.log(`${test}>${test2}`):
// console.log(`${test}=${test2}`)


// Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 
// let num1 = 55
// let num2 = 6
// let operator = "/"

// if(operator == "+"){
//     console.log(num1 + num2)
// }
// else if (operator == "-"){
//     console.log(num1 - num2)
// }
// else  if (operator == "*"){
//     console.log(num1 * num2)
// }
// else if (operator == "/" && num2 != 0){
//     console.log(num1/num2)
// }
// else console.log ('Please enter correct number')

//with switch
// let num1 = 120;
// let num2 = 0;
// let operator = "j"

// switch (operator){
//     case "+":
//         result = num1 + num2
//         console.log( "The result is " + result)
//         break;
//     case "-":
//         result = num1 - num2
//         console.log('The result is '+ result)
//         break
//     case "/":
//         if (num2 != 0) result = num1 / num2
//         else result = "You cant devide by o "
//         console.log(' '+ result)

//         break
//     case "*":
//     result = num1 * num2
//     console.log('The result is ' +  result)
//     break

//     default:
//         console.log('Unknown operator');
    
// }



// // Попробуйте внедрить в свою программу с кофе вложенный if




// Креативное задание*(не показываем решение до понедельника):
// Имеется зашифрованное предложение 
// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
// мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.
let text = "You are the best QA ever"
let newText = ''
let count = 0
for (let i = 0; i < text.length; i++){
    if (count % 2 == 0){
        newText = newText + text [i] + 'br'
    }
    count += 2
}
console.log(newText)
//decoder
let decoderResult = " "
for (let i = 0; i < newText.length; i += 3){
    decoderResult += newText [i]
}
console.log(decoderResult)

// Задачка посложнее* 
//  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

// Домашнее задание от Татьяны Волк


// Нарисовать елочку и ромб  с помощью циклов 
