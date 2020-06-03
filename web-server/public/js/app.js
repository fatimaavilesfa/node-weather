
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
  
    messageTwo.textContent = '';
    messageOne.textContent = 'Loading...';

    fetch(`/weather?address=${location}`)
    .then((response) => {
        response.json().then((data) => {
            if(data.error_message) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.innerHTML =  data.forecast;
            }
        })
    })

    
})