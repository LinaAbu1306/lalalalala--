//Js arrow function
//если со стрелочкой то ретерн не нужен

// let bmi = (height, weight) => weight/height ** 2;
// console.log(bmi(1.52,71))


let bmi = (height, weight) => (weight/height ** 2).toFixed(2);
console.log(bmi(1.52,71))//округлила до 2х знаков после запятой

//перевести из фаренгейта в цельсии С=(f-32)*5/9

let c = (f) => ((f -32)* 5/9).toFixed(1)
console.log (c(100))//округлить до 2 после точки

//chocolate
function breakeChoco(n,m){
    if (n == 0 || m == 0 ){
        return 0
    }
    else{
        return n * m -1
    }
}
console.log(breakeChoco(3,1))