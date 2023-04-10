let str = "hello world, how are you?"
// for (let i = 0; i < str.length; i++){
//     console.log(str[i])
// }
// for (let i in str){
//     console.log(str[i])
// }
/////
let arr = ["Sam", 56, true, false, 2, 'hello']
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
////вывесть обьект и индекс и значения
// let person = {
//     name: 'Anna',
//     lastName:'Smith',
//     age:20
// }
// for (let key in person){
//     console.log(person[key])
// }
///////// sozdat object добавить ключь {1:"H",2:"e"...}k stringu vverhu (1 stroka)
// let newObject = {}
// for (let i = 0; i < str.length; i++){
//     newObject[i+1]= str[i]//prisvoy znachenie nachinaya s 1 indeksa iteraciya nachinaetsa s 1
// }
// console.log(newObject)
////
let newObject = {}
newObject ['id'] = 2
newObject ['number'] = 3
newObject ['name'] = 'John'
newObject ['key'] = '#3'
delete newObject.name
console.log(newObject.name)//undefined tak udalili
//udalit element naprimer '?' iz 1 stringa nujno budet zapisat>> delete newObject[26]
//vivesti key:
//console.log(Object.keys(newObject))