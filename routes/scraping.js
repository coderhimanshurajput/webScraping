'use strict';

const
    express = require('express'),
    router = express.Router(),
    request  =  require ('request'),
    cheerio  =  require ('cheerio'),
    fs       =  require ('fs');


// web scraping created by himansh rajput

router.post('/scraping', (req, res, next) => {
     let urls = [ ];
    // console.log('himanshu Rajput');

    request('http://www.flipkart.com/',(error, res, body) => {
        if(!error && res.statusCode == 200){
            let $ = cheerio.load(body);
            $('a.title','#siteTable').each(function () {
                let url = this.attr('href');
                if (url.indexOf('')!= -1){
                    urls.push(url);
                }
            });
            console.log(urls.length);
        }
    });


    /*let url = "http://wikipedia.org";
    request(url, (error,res, body)=>{
      if(!error) {
        let $ = cheerio.load(body)
          let title = $('title').text();
        let content = $('body').text();
        let freeArticles = $('.central-featured-lang.lang1 a small').text()
          console.log('URL:' +url);
        console.log('Title:' +title);
        console.log('EN articles:' +freeArticles);
      }
      else {
        console.log("We ' ve encountererd an error " + error);
      }
    });*/




});


module.exports = router;