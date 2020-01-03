const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});

app.get('/', function(request, response){
    response.send('Hello, World!');
});

app.get('/test', function(request, response){ response.send('Hello there');});