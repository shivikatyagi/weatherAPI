const request= require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=3534a4f888605991fb027eab2dad71c7&query=37.8267,-122.4233'
// request({url: url, json:true},(error,response) =>{
// // console.log(response.body.current)
// console.log("it is currently "+ response.body.current.temperature + " degrees out but it feeels like " + response.body.current.feelslike + " degrees out")
// })

//const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaWFtc2hpdmlrYXR5YWdpIiwiYSI6ImNreGJrOHZvMDA4emcybm1teXRyOGFlY3gifQ.KYUFqdq68RORFq9ovRqlIw'
//  request({url: geocodeurl,json:true},(error,response) =>{
//     const longitude = response.body.features[0].centre[0]
//     const latitude = response.body.features[0].centre[1]
//     console.log(latitude, longitude)
//  })

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })

const address = process.argv[2]


if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
}
console.log(process.argv)



