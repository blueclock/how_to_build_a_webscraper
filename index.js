(function webScraper() {
  var rp = require('request-promise');
  var cheerio = require('cheerio'); // Basically jQuery for node.js

  var options = {
    uri: 'http://www.maccosmetics.co.uk/product/13854/310/Products/Makeup/Lips/Lipstick/Lipstick#/shade/Finally_Free_%28ONLINE_EXCLUSIVE%29',
    transform: function(body) {
      return cheerio.load(body);
    }
  };

  rp(options)
    .then(function($) {
      // Process html like you would with jQuery...
      var lipsticksName = [];

      $("div.shade-picker-float__colors").each(function(index, value) {

        lipsticksName.push($(value).html());

      });
    
    })
    .catch(function(err) {
      // Sraper failed or Cheerio choked...
      console.log(err);
    });

}())
