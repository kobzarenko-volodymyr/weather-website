const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2cc35f1b00b7b937f787ed1996082f25/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '?units=si'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
            ' degrees out. There is a ' + body.currently.precipProbability + 
            '% chance of rain.')
        }
    })
}



module.exports = forecast