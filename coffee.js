// let cupSize
// let smallCup = "small cup"
// let mediumCup = "medium cup"
// let largeCup = "large cup"

// let water
// let hotwater = "Hot water"
// let coldWater = " Cold water"

// let price = 5

// let coffeeType
// let latte = "latte"
// let icedCoffee = "Iced coffee"
// let waterVolume

// // your choice
// coffeeType = icedCoffee
// cupSize = largeCup
// //set recipe ingredients
// if (coffeeType == icedCoffee){
//     water = coldWater
// }else {
//     water = hotwater
// }
// if (cupSize == smallCup) {
//     waterVolume = '150 ml'
//     console.log(cupSize + "-" + price + "$")
// } else if (cupSize == mediumCup) {
//     waterVolume = '250 ml'
//     price += 3
//     console.log(cupSize + "-" + price + "$")
// }
// else if (cupSize == largeCup) {
//     waterVolume = '450 ml'
//     price *=2,5
//     console.log(cupSize + "-" + price + "$")
// }
// //steps for the coffee recipe
// let order = `You choose a ${cupSize} of ${coffeeType}. Follow the steps:`
// let step1  = `1. Take a ${cupSize}`
// let step2 = `2. Put 1 spoon of coffee in `
// let step3 = `3. Pour ${waterVolume} of ${water}in a cup`
// let step4 = `4. Pour 20 ml of milk in a cup of coffee`
// let step5 = `5. Stir coffee in a cup with a spoon`
// let orderPrice = `The order price is ${price}$`
// let result = `Enjoy your coffee`
// console.log( order + step1 + '\n', step2 + '\n', step3 + '\n' ,step4 + '\n',step5 + '\n',orderPrice+ '\n',result
// )

//function
function showWelcomeMessage(){
    console.log ("Welcome to our self-service coffee shop")
    console.log ("What coffee cup size, would you like to order today?\n")
}
function ShowCupOptions(){
    let smallCup = "Small"
    let mediumCup = "Medium"
    let largeCup = "Large"
    let price = 5

    let cupOptions = [[smallCup,price],[mediumCup * 1,5],[largeCup,price * 2]]
    for(let i = 0; i < cupOptions.length; i++){
        console.log(cupOptions[i][0]+ '-' + cupOptions [i]+[1]+ '$')
        if (i ==cupOptions.length - 1){
            console.log ('\n')
        }
    }
}
showWelcomeMessage()

function showCoffeeTypesAndIngridients(){
    let latte = 'Latte'
    let icedCofee = "Iced Coffee"
    let beansArabica = " Arabica ground beans"
    let nescafe = " Nescafe"
    let hotWater = "Hot water"
    let coldWater = "Cold water"

    let latteIngridients = `${latte}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`
    let icedCoffeIngridients = `${icedCofee}: 1 spoon pf ${nescafe}\n ${coldWater}`

    console.log("We have following coffee types. Please, choose one: \n")
    let menu = [latteIngridients,icedCoffeIngridients]
    for (let i = 0; i < menu.length; i++){
        console.log(menu[i])
    }
    function setWaterForCoffe(coffeeType){
        if (coffeeType.toLowerCase()== "Iced coffee"){
            return water = " cold water ";
        }else {
            return water  = "hot water"
        }
    }
    function getPriceCup (cupSize){
        let price = 5
        if (cupSize == "small" ){
            return price
        } else if (cupSize == "medium"){
            return price *=1.5
        } else if (cupSize == "large"){
            return price *= 2
        }
    }
    //output for client
    function showRecipeClient (cupSize, coffeeType,isLactoseFree, milk = "half&half"){
        let water = setWaterForCoffe(coffeeType)
        price = getPriceCup(cupSize)
        let order = `You choose a ${cupSize} cup of ${coffeeType.toUpperCase()}\n Follow the steps:`
        let step1 = `Take a ${cupSize}cup`;
        let step2 = "Put 1 spoon of coffee in it";
        let step3 =`Poor ${water} in a cup of coffee`;
        let step4 = `Poor ${milk} in a cup of coffee `;
        let step5 = "Stir coffee in a cup with a spoon";
        let orderPrice = `The order price is ${price}`;
        let result = `Enjoy your coffee`
        // add steps to recipe
        let recipe = [step1, step2, step3, step4, step5]
        let stepNum = 1
        let clientRecipe = " "
        for (let i = 0; i < recipe.length; i++){
            if (isLactoseFree == true && recipe [i]== step4)continue
            clientRecipe = clientRecipe + (stepNum ++) + recipe [i] + '\n'
        }
    console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result)
    }
}
showWelcomeMessage()
ShowCupOptions()
