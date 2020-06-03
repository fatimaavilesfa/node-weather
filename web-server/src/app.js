const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();

const port = process.env.PORT || 3333

//Define path for express config
const publicDirPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//setup handle bars engine and view location 
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//setup statice directory to serve
app.use(express.static(publicDirPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Fatima Aviles'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Fatima Aviles'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Help message', 
        title: 'Help page',
        name: 'Fatima Aviles'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send('You must  provide address')
    }
    
    geoCode(req.query.address, (error, {lat, lng, location} = {}) => {
        if(error) {
            return error
        }
        return forecast(lat, lng, (error, forecastData) => {
            if(error) {
                error
            }
            console.log(location)
            console.log(forecastData)
            res.send({
                location,
                forecast: forecastData,
                address: req.query.address
                })
        })
        
    })


})

app.get('/products', (req, res) => {
    if(!req.query.search) {
         return res.send({
            error: 'You must provide search term'
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404',
        message: 'Article not found', 
        name: 'Fatima'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        message: 'Page not found', 
        name: 'Fatima'
    })
})

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})