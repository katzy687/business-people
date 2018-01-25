/**
 * Created by nataliebarnatan on 06/07/2017.
 */
var express = require ('express');
var app = express();

const data = require('./public/js/mock.json');
console.log(data);

app.use("/", express.static("./public"));

app.get('/getPersonsData', (req, res) => {
  res.json(data);
})


app.listen(process.env.PORT || 7000);
console.log('listening on port 7000');