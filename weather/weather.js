const request = require('request');


var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/4fc37275c6c21e60c9a58631e15096db/${lat},${long}`,
        json: true
    }, (error, response, body) => { 
        if(error) {
            callback('Unable to connect to Forecast.io server');
        } else if (response.statusCode === 400) {
            callback('unable to fetch weather')
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
             
        }
       
         
         
    }); 
}

module.exports.getWeather = getWeather