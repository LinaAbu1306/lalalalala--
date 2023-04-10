///??

// let arr = [80, 117, 155, 104, 45, 85, 112, 115]

// function check(a,x) {
//     let b = a.indexof(x);
//     console.log(b);
//     return b >= 0;
// };

// console.log(check(arr,85))
// console.log(check(arr,86))
//function that check if the elemnt is present
// let arr = ['t','e', 's', 't']
// function check(a,x){
//     return a.includes(x)
// }
// console.log(check(arr,'s'))
// console.log(check(arr,'e'))

/////oвца и волки/идем с конца массива/предупредить овцу
function warnTheSheep(queue) {
if (queue[queue.length - 1]== 'wolf'){
    return "please go away"
    } else {
    let a = queue.length - (queue.indexof('wolf')+1)//8-6
    return "Oi! Sheep number 6! You are about to be eaten by a wolf!"  
    }
}
console.log(warn.warnTheSheep)

// l