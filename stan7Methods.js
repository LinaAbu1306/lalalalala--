// Methods
//const arr = [2, 3, 4, 26, 9, [49, 57]];

// console.log (arr.reduce ((sum, el, i) => sum + i % 2 === 1 ? el : -el, 0));

// console.log(arr[5].pop())

//ternarniy operator
////every
// const arr = [2, 6, 3, 28, 9]
// console.log(arr.every(el =>el >0))//vse elemnti bolshe o
// console.log(arr.every(el =>el >3))//bolshe 3
// console.log(arr.every((el,i)=> i % 2 ==0? el>0:el>5))//chetnie menshe 5?
// console.log(arr.some(el =>el > 28))//chetnie menshe 29


///////
// const arr = [2, 6, 3, 28, 9]
// const newArr = [];
// arr.forEach(el => el>3?newArr.push(el):console.log(el))
// console.log(newArr)

// сорт меняет порядок нужно создавать новый массив

// const arr = [2, 4, 5, 99, 56, 3, 2, 55, 66, 3940]//v alfavitnom poryadke a-z
// const arrStr = ['a', 'bb', 'z', 'c', 'w', 't','A']
// // arr.sort();
// // console.log(arr)
// // console.log(arrStr)
// const arrNew = [...arr,... arrStr]//сложить арреи
// arrNew.sort()
// console.log(arrNew)

///////
// const arr = [2, 4, 5, 99, 56, 3, 1, 55, 66, 3940]
// arr.sort((num1, num2) => num1 - num2)//zadaet poryadok//ili zamenit na (a,b) a-b //podstavit
// arr.sort((num1, num2) => num2 - num1)// v obratnom poryadke
// console.log(arr)
//////

// const arr = [2, 4, 5, 99, 56, 3, 1, 55, 66, 3940]
// const arrNew = [
//     [1, 25],
//     [2, 2],
//     [1, 2],
//     [1,205],
//     [3, 4],
//     [1,0]
// ]
// arrNew.sort(([a,b],[c,d])=>a-c).sort();
// console.log(arrNew)



//////////Map

//const arr = [2, 6, 3, 28, 9, 103, 1, 1100, 3940]
// let arrNew = arr.map(el => el **2 ) //vozvesti v kvadrat 
// console.log(arrNew)
//esli delitsa na 3 bez ostatka vivesti eto chislo
// let arrNew = arr.map(el => el % 3 == 0 ? el /3 : el ) //vozvesti v kvadrat 
// console.log(arrNew)

//Callback index delitsa 3 esli  element delitsa na 3 vozvrashem element podelenniy na 3. esli net to
//vernem elemeny//1.50 na video
// const arr = [2, 6, 3, 28, 9, 103, 1, 1100, 3940]
// let  Callback = (el, i) => {
//     if (i%3 ==0 && el % 3 == 0){
//         return el/3;
//     }
//     return el;
// }
// let arrNew = arr.map(Callback)
// console.log(arrNew)

//////reduce//esli ne stavim 0 vnachale to zamenyaet pervim elementom//posle strelochki

// const arr = [2, 6, 3, 5, 9];

// const result = arr.reduce((acc, el, i, arr)=> acc +el,0)
// // explanation below
// //acc =0,
// //el = 2, acc = 0+2 =2
// //el=6, acc = 2+6=8
// //el =3, acc = 8 +3 =11
// console.log(result)

////// prohodim i proveryaem po indexu i po chislu(chtobi slojilos nujno chtobi index bil chetnim
//i delitsya na 2)\doljni vipolnatsa oba uslovia/video 2h
// const arr = [2, 6, 3, 5, 9];
// const result = arr.reduce((acc, el, i, arr)=> i % 2 == 0 ? acc +el: acc, 0)
// console.log(result)

///s4itaet kol-vo elementov
// const arr = ['stan','js','06']
// const result = arr.reduce ((acc, el, i, arr)=> el.length + acc,0)
// console.log(result)
///


/////

// const arr = Array.from('JavaScript',el => '*' + el + '+');
// console.log(arr)

// const arr2 = Array.of (1,'str', NaN, true, undefined)
// console.log(arr2)
// let num = [];
// console.log(Array.isArray(num))

////// 

// const arr = [1, 2, 3];
// const arr2= [1, 2, 3];
// console.log(JSON.stringify(arr)=== JSON.stringify(arr2))

///
// const str = 'Stan';
// console.log(typeof str)

// const strNew = new String ('Stan');//obyect classa string
// console.log (strNew)


////////sunday
//-1 not found
// const str = "potato"
// const str1 = "blueberries"
// const str2 = "06"
// const arr = [];
// let pos = str.indexOf('o')
// while (pos !== -1){
//     arr.push(pos);
//     pos = str.indexOf('o', pos +1)
// }
// console.log(arr)

// console.log(str.indexOf('to'))

///////////Objest= key and parametrs
// let obj = {};
// obj ['type'] = 'JS'
// console.log(obj)//{ type: 'JS' }
/////
// let obj = {};
// let str = 'JavaScript';
// ///vot tak dobavlyaem
// obj['lastName']= 'P'
// obj ['firstName']= 'Stan'

// for( let i = 0; i <str.length;i++){
//     obj[i]= str [i]
// }
// console.log(obj)
// console.log(obj)
// //
// console.log(obj['name'])
// for ( let i = 0; i <str.length;i++){
//     obj[i] = str [i]
//     console.log(obj)
// }
// console.log(obj)
// ///
////



/////operator delete

// const log = console.log
// let obj = {
//     arr:[10,20,30],
//     obj:(a;'abc',b:'cbd'),
//     100:1000,
//     funct:


// }
// delete obj ['func']