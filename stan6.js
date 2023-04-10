// //often asked on the interviews
// //vizov samoy funkcii v samoy sebe pythontutor.com чтобы посмотреть по шагам
// let count = 0;
// function recursion(){
//     count++
//     console.log(count)
//     if (count > 50) return
//     recursion()
// }
// recursion()
// /////////////////////
// 1! = 1
// 2! =1*2
//3!= 1*2*3

// function factorial_1(n){
//     let p =1;
//     for (let i =1; i <= n; i++){
//         p *=i
//     }
//     console.log(p) 
// }
// factorial_1(5);

// let result = 1
// function factorial_2(n){
//     if (n ==0) return;
//     result *=n;
//     factorial_2(n - 1);
// }
// factorial_2(5)
// console.log(result)

// function factorial_3(n){
//     return n ==1 ? 1: n *factorial_3(n - 1)
// }
// console.log(factorial_3(5))

// //3! = 1*2*3
// //n = 3 -> 3 * factorial(2)-> 3*2->6
// //n = 2 -> 2 * factorial(1)->2*1->2
// //n = 1->1

//числа фибоначи
//0,1,1,2,3,5,8
//n количество шагов
// function fib(n){
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     return fib( n - 1) + fib (n - 2)//независимо какое число
// }
// console.log(fib(8))

////////samovizivaemaya function

// function counter() {
//     let count = 0;
//     return function createCount(){
//         count++;
//         console.log(count)
//     }
// }
// let counter_1 = counter();
// let counter_2 = counter()
// counter_1();
// counter_2();
// counter_1();
// counter_2();
// counter_1();
// counter_2();
// counter_1();
// counter_2();

/////

// const arr = new Array (4, 5, 9, 'lol');//bolshe elementov budrt srazy massiv esli bolshe 1, est svoysto lenght
// const arrNew = [];
// console.log(arr, arrNew)
// console.log(arr.length)
// console.log(arr.length[3])//обратиться к 3 элементу

// arr.push(785,44,"true", true)
// console.log(arr)//добавить в конце
// //добавить вначало
// arr.unshift(785,44,"true", true)
// console.log(arr)
// //shift deletes s 1 elementa
// arr.shift(785)
// console.log(arr)

//reverse 

let str = " hello Javascript"
// console.log(str.split())
// console.log(str.split(""))
// console.log(str.split('l'))
// console.log(str.split('a'))
// let newStr = arr.join('a')
// console.log(newStr)//k zadache vishe dobavitsa v massiv
// console.log(typeof newStr)

// didnt get it (end of the class)
//function createSteps(n){
//     let str = ''
//     for (let i = 0; i <= n; i++){
//         str += ' '.repeat(i) + 'I' + '\n'
//     }
//     return arr;
// }
// console.log(createSteps(5))


/////////

const arr = ['t','e','s','t']
//copy of array method slice
// const arrNew = arr;
const arrNew =arr[[2], arr[3]]
console.log(arr.slice())
//
arr[0] = "T";
console.log(arr)
console.log(arrNew)
