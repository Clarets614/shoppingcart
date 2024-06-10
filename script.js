//array

let products = [
    { name: 'chapstick', price: 0.75 },
    { name: 'cellphone charger', price: 7.50 },
    { name: 'earbuds', price: 15.00 },
    { name: 'Kleenex box', price: 4.00 },
    { name: 'Nail file', price: 3.00 },
    { name: 'Nail polish', price: 3.00 }
]


//add items to shopping list
let shoppinglist = []
function AddToList(name, price){
    let newitem = {
        Name: name, Price: price
    }
    shoppinglist.push(newitem)
}
function CheckOut(){
    console.log(shoppinglist)
    let total = 0;
    shoppinglist.forEach(i => total += i.Price)
    console.log(`Total: ${total}`);
}


console.log(products)

function ShowList(){

    return shoppinglist.forEach((s) => console.log(s)) 
    };
