
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            descibe: 'Lat to fetch weather for',
            string: true
        },
       
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAs4I8CFcuaJLcT8tttsoiSc1pybVJHVVA&address=${encodedAddress}`


axios.get(geocodeUrl).then((response) => {
    console.log(response.data);
}).catch((e) => {
    console.log(e)
})