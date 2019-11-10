var express = require('express');
var router = express.Router();



const GSR = require('google-search-results-nodejs')
const client = new GSR.GoogleSearchResults("AIzaSyBWfuBeeuxLPuD5IqKVDzlrRk_zHZccIWo")


    

    //const unsplash = new Unsplash({ accessKey: "Ae2e3fb46ab9684fcebdab981da98c31ff4e1dea9724e5216ff7bcddcf294493e" });

//     const unsplash = new Unsplash({
//   accessKey: "e2e3fb46ab9684fcebdab981da98c31ff4e1dea9724e5216ff7bcddcf294493e",
//   // Optionally you can also configure a custom header to be sent with every request
//   headers: {
//     "X-Custom-Header": "foo"
//   },
//   // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
//   timeout: 500 // values set in ms
// });
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/photoTest', function(req, res, next) {
    
    client.json({
        q: "Coffee", 
        location: "Austin, TX"
       }, (result) => {
         console.log(result)
       })

 
});

module.exports = router;