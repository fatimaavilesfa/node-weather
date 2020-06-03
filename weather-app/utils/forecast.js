const request = require('request');

const forecast = (lat, lng, cb) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=446b8d8f45f831be8fea5368e7246b39&units=imperial`;

    request({ url }, (error, { body }) => {
        if(error) {
            cb('Unable to connect to service!')
        }
        else if(JSON.parse(body).cod == 404) {
            cb('Unable to find tempeture related to the location porvided')
        } else {
            cb(undefined, {
                 description : JSON.parse(body).weather[0].description,
                 temp : JSON.parse(body).main.temp
            })
        }
    })
}

module.exports = forecast;