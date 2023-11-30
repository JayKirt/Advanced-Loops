// there are for/while/do/forEach loops but there are also two other types of loops as below

const basket = [ 'apples','oranges', 'grapes']

// Original way 
for (let i=0; i < basket.length; i++ ){
    console.log(basket[i])
};

//forEach 
basket.forEach(item => {
    console.log(item);
})

//             ********** Other methods **********

// for of loop (ES6 feeature)
for (item of basket) {
    console.log(item);
}
// we use the for key word then creating a variable (item) and its of (keeyword) the basket array

// for in loop works with objects - as below 
const detailedBasket = { 
    apples:5,
    oranges:10,
    grapes:1000
}

for (item in detailedBasket) {
    console.log (item)
}

// this allows us to loop over and see the objects properties 
// This is not iterating, wee are enumerating as properties of an object are enumerable 
// 