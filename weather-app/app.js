const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if(!location) {
    console.log('Please provide address')
} else {
    geoCode(location, (error, {lat, lng, location}) => {
        if(error) {
            return console.log(error)
        }
        forecast(lat, lng, (error, forecastData) => {
            if(error) {
                console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
        
    })
}

