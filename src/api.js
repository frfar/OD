var Amadeus = require('amadeus');

var amadeus = new Amadeus({
    clientId: '5lBJbMG49V4CTi5dKJwjMlLDAsvujay2',
    clientSecret: 'EV6yNGpowjDAOh6Q'
});

console.log(amadeus)
amadeus.referenceData.urls.checkinLinks.get({
    airlineCode: 'BA'
}).then(function(response){
    console.log(response.data);
}).catch(function(responseError){
    console.log(responseError.code);
});