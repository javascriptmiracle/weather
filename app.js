const request = require('request');
const yargs = require('yargs');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            descibe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


    console.log(argv)

var encodedAddress = encodeURIComponent(argv.address)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAs4I8CFcuaJLcT8tttsoiSc1pybVJHVVA&address=${encodedAddress}`,
    json: true
}, (error, response, body) => { 
    if(error) {
        console.log('Unable to connect to Google Servers');
    } else if(body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address')
    } else if(body.status === 'OK'){
        console.log(`addres ${body.results[0].formatted_address}`);
        console.log(`Lattitude ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude ${body.results[0].geometry.location.lng}`);
    }
     
     
}); 