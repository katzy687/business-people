/**
 * Created by nataliebarnatan on 06/07/2017.
 */
var express = require ('express');
var app = express();

app.use("/", express.static("./public"));

app.listen(process.env.PORT || 3000);
console.log('listening on port 3000');