const quotes = [
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


// Query strings
exports.getQuotes = function (request, response) {
   if (request.query.year) {
      const requestYear = Number(request.query.year)
      console.log(`Get a list of all quotes from ${requestYear} as json`)
      const filteredQuotes = quotes.filter(quote => quote.year === requestYear)

      response.send(filteredQuotes)
   }
   else {
      console.log("Get a list of all quotes as json");
      response.json(quotes);
   }
}

// Named Route Parameters
exports.getById = function (request, response) {
   console.log("return quote with the ID: " + request.params.id)
   response.send(quotes.find(quote => quote.id === Number(request.params.id)))
}

exports.post = function (req, res) {
   console.log("Insert a new quote: " + req.body.quote)
   res.json(req.body)
}