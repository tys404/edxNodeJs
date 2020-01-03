const express = require('express');
const app = express();
const port = 3000;

var quotes = [
   {
      id: 1,
      quote: "The best is yet to come",
      author: "Unknown",
      year: 2000
   },
   {
      id: 2,
      quote: "This is a quote",
      author: "First Last",
      year: 1930
   },
   {
      id: 3,
      quote: "This is another quote",
      author: "First2 Last2",
      year: 1910
   }
];

app.listen(port, function () {
   console.log('Express app listening on port ' + port);
});

app.get('/', function (request, response) {
   response.send('Get request received at "/"');
});

app.get('/quotes', function (request, response) {
   if (request.query.year) {
      console.log(`Get a list of all quotes from ${request.query.year} as json`);
      const filteredQuotes = quotes.filter(quote => quote.year === Number(request.query.year))
      response.send(filteredQuotes);
   }
   else {
      console.log("Get a list of all quotes as json");
      response.json(quotes);
   }
});

// Named Route Parameters
app.get('/quotes/:id', function (request, response) {
   console.log("return quote with the ID: " + request.params.id);
   response.send(quotes.find(quote => quote.id === Number(request.params.id)));
});