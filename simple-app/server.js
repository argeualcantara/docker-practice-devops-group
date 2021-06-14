const express = require('express');
const app = express();
const fs = require('fs');


app.get('/', (req, res) => {
  var response = 'Hello from NodeJS App\n';
  if(process.env.USERNAME != '' || process.env.USERNAME != undefined || process.env.USERNAME != 'undefined'){
    response = 'Hello ' + process.env.USERNAME + ' to NodeJS App\n';
  }
  res.send(response);

});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  fs.writeFileSync('argeu.txt', 'result');
  console.log(`Server listening on port ${PORT}...`);
});
