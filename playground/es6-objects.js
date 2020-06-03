
const name = 'Fatima';
const userAge = 32

const user = {
    name,
    age: userAge, 
    location: 'Merida'
}

console.log(user)

//object destructuring
const product = {
    label: 'Notebook',
    price: 109,
    stock: 300,
    salePrice: undefined, 
    rating: 7
}

// const {label:newName, stock, rating = 5} = product;
// console.log(rating)
// :O


const transaction = (type, { label, rating }) => {
    console.log(type, label, rating)
}
transaction('order', product);