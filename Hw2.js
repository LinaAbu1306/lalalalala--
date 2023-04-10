//1.3 Решите задачу с помощью пройденных тем:
//«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
let dayDistance = 3
let nightDown = -2
let distance = 0
let days = 0
//1
if ((distance += dayDistance) <=5){//присваем нулю дистанции 3 
    days++
    console.log (`- Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
    
    distance +=nightDown //сползла на -2
}
//2
if ((distance += dayDistance) <=5) {
    days++
    console.log (`- Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
    distance +=nightDown
}
//3
if ((distance += dayDistance) <=5) {
    days++
    console.log (`- Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
    distance +=nightDown
}
//4
else console.logre('Finish')

//1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.

// let myMonth = "MAY"
// let month = myMonth.toLowerCase() //приводит к ловер кейс
// if (myMonth == "July" || myMonth == "August"){
//     console.log("Approved!")
//     }else console.log("Denied")






//1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
//У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.

// let num1 = 55
// let num2 = 6
// let operator = "/"

// if(operator == "+"){
//     console.log(num1 + num2)
//     // prompt(num1 + num2)
// }
// else if (operator == "-"){
//     console.log(num1 - num2)
//     // prompt(num1 - num2)

// }
// else  if (operator == "*"){
//     console.log(num1 * num2)
//     // prompt(num1 * num2)

// }
// // else if (operator == "/" && num2 != 0){
// //     console.log(num1/num2)
// //     // prompt(num1 / num2)

// // }
// // else console.log ('Please enter correct number')