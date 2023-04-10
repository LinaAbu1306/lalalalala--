// У вас есть массив со скобками, предположим 
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
// let sum1 = 0
// let sum2 = 0

// let arr = ['(',')','(',')',')']
// //let str2 = [(‘, ‘)’, ‘(‘, ‘)’, ‘)’,2,'a']

// for (let i = 0; i < arr.length; i++){
//     if(arr[i]== '('){
//         sum1 += 1
//     } else if (arr[i] == ')'){
//         sum2 += 1
//     }
// }
// console.log('opening - '+ sum1 +',closing - ' +  sum2)

// if(sum1 == sum2){
//     console.log('equal')
// }
// else console.log('not equal')

// // 5. Задача с интервью*
// У вас есть массив с тремя видами скобок, предположим 
// [ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
//  Пример:
// [ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
// [ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары

// let arr = ["{", ")","(",")",")","}","[","]",")"];
// let sumCountOpen = 0;
// let sumCountClose = 0;
// for (let i = 0; i < arr.length; i++){//idem po kajdomy elementu
//     if(arr[i] == "{" || arr [i] == "("|| arr[i] == "["){ // kogda uvidim skobky takuyu prbavim 1 
//         sumCountOpen += 1; //to dobavlay 1
//     } else if (arr[i] == "}" || arr [i] == ")"|| arr[i] == "]") {
//         sumCountClose += 1
//     }
//     if (sumCountClose == (sumCountOpen && sumCountOpen - sumCountClose) >= 0){
//         console.log(true)
//     }else {
//         console.log(false)
//     }
// }

////////////////

//04/01
//function generate(seed){


////from codewars/vivesti seredinky
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
console.log(getMiddle('parallel'))

//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    let vowels = "aeiou"
    return str.split("").filter(el => "aeiou".includes(el)).length 
  }
  console.log(getCount('arracadabrinla'))