// let arr= [];
// arr[0] = 10;

// arr[100000] = 1;
// console.log(arr);


//проверка на если это не существует получаешь то что после ?? ||

// let name;
// name = name || "Guest"

// if (name){
//     console.log(name)
// }

//хотим получить абсолютное значение/ pow-возведение в степень

// let num = 10;

// console.log(Math.abs(num))
// console.log(Math.pow(num,3));//или (num ** 3)
// console.log(Math.sqrt(num));//найти корень (num **(1/2))


//let num = -7.76899;
//math .round(), .floor(), .ceil(), .trunc()
//             //округяет к меньшему (с минусом)           // округяет в плюс //отбрасывает дробную часть
//console.log(Math.trunc(num))
//console.log(Math.floor(num))
//console.log(Math.round(num))

//округлить до 2 знаков
// let num = 6.769999;
// console.log(typeof num)
// console.log(num.toFixed(0))
// console.log(+num.toFixed(0)+10)//переводим к числу добавляя + и тогда прибавится 10 к этому числу а если нет=будет строка

// for (let i = 0; i <= 1; i+= 0.1){
//     console.log(i)
// }
//вести числа до 10 вычитая 2
// for (let i = 10; i >= 0; i -=2){
//     console.log(i)
// }

// let name = "Lina";
// console.error(name)
// let className ="JS"
// console.log(`%c${className}`,'color:pink;font-size:23px')
// console.log(`hello%c you`,'color:blue;font-size:23px')
// //
// let result = 0
// console.time()
// for (let i = 0; i < 1000000; i++ ){
//     result++
// }
// console.timeEnd()


// sort from small to big

const arr = [12, 45, 688, 99, 8, 6, 555];
console.log(arr);


for (let i = 0; i < arr.length -1; i++){
    for (let j = i + 1 ; j < arr.length; j++){
        if (arr[i] > arr [j]){
            let temp = arr [i]
            arr [i] = arr [j]
            arr [j] = temp
        }
    }
}
console.log(arr);

// const arr = [12, 45, 688, 99, 8, 6, 555]
// console.log (arr)

// const arr1 = [12, 46, 2, 39, 4298, 645]
// console.log(arr1)

// const arr4 = [3, 46, 66, 88, 999]
// console.log(arr4)
