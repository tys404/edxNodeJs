module.exports = function(app) {
 
   var quotes = require('./quotes');

   app.get('/quotes', quotes.getQuotes)
   app.get('/quotes/:id(\\d+)', quotes.getById)
      
   app.post('/quotes', quotes.post)
}