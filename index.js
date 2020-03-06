'use strict'

let serverless = require("serverless-http"),
    express = require("express"),
    httpProxy = require("http-proxy"),
    app = express(),
    proxy = httpProxy.createProxyServer();


const DBCONNECTOR_URL = "http://43ed6a8f-dbconnector-dbcon-b346-1993908111.ap-southeast-1.elb.amazonaws.com";


app.all('/dbConnector/*', (req, res) => {
    console.log("request for db connector");
    proxy.web(req,res, { target : DBCONNECTOR_URL});
});


// app.listen(3000, () => console.log('listen to port 3000'));
module.exports.handler = serverless(app);