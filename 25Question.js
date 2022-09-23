// 25. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of you shopping cart if it has not been already added
// - remove 'Honey' if you are allergic to honey
// - modify Tea to 'Green Tea'

const Cart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// let allergic=true;

if(!(Cart.includes('Meat'))){
    Cart.unshift('Meat');
    console.log(Cart);
}

if(!(Cart.includes('Sugar'))){
    Cart.push('Sugar');
    console.log(Cart);
}

let allergic = true;
if(allergic){
    Cart.splice(Cart.indexOf('Honey'),1);
    console.log(Cart);
}

Cart[Cart.indexOf('Tea')] = 'Green Tea';

console.log(Cart);