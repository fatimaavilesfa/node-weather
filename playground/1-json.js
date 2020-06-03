const fs = require('fs');

// const book = {
//     title: 'El mundo de Sofia', 
//     author: 'Jostein Gaarder'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json'); 
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);


 
const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
for(let key in data) {
    if(key === 'name') {
        data[key] = 'Fatima'
    }
    if(key === 'age') {
        data[key] = 32
    }
}
const dataBack = JSON.stringify(data);
console.log(dataBack)

fs.writeFileSync('1-json.json', dataBack) 