const request = require('request');

const geoCode = (address, cb) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAFAk-2AVZIMAchSRQf_g1kzi8coR6Vq0w`;

    request({ url }, (error, { body }) => {
        if(error) {
            cb('Unable to connect to location services!')
        }
        else if(JSON.parse(body).error_message) {
            cb('Unable to find location. Try another search')
        } 
        else {
            cb(undefined, {
                lat : JSON.parse(body).results[0].geometry.location.lat,
                lng : JSON.parse(body).results[0].geometry.location.lng,
                location: JSON.parse(body).results[0].formatted_address
            })
        }
    })
}



module.exports = geoCode;