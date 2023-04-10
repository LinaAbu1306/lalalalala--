// let arr = ['Tom','green', 55, 'apple', 43, 88, 'pear', 'red', 1]

// function createArrayofNumbers(array){
//     let arrNew = [];
//     for (let i = 0; i< array.length; i++){
//         if( typeof array[i] == 'number'){
//             arrNew.push(array[i]);
//         }
//     }
//     return arrNew;
// }

// function sumNumber(a,b,c){
//     let result = a + b + c;
//     return result;
// }
// console.log(sumNumber(2,4,'hello'))
//вернуть индекс элемента например 88
// let arr = ['Tom','green', 55, 'apple', 43, 88, 'pear', 'red', 1]

// function indexOfElemnt (array, num){
//     for (let i = 0; i < array.length; i++){
//         if (array[i]== num){
//         return i;
//         }
//     }

// }
// console.log(indexOfElemnt(arr, 1))

//с else
function sumNumber(a,b,c){
    let result = a + b + c;
    return result;
}
console.log(sumNumber(2,4,'hello'))
let arr = ['Tom','green', 55, 'apple', 43, 88, 'pear', 'red', 1]

function indexOfElemnt (array, num){
    for (let i = 0; i < array.length; i++){
        if (array[i]== num){
        return i;
        }else{
            return -1;
        }
    }

}
console.log(arr.indexOf(88))


