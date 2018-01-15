/*global io*/

// var http = require('http');

// http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write("Hello, this is dog");
//   response.end();
// }).listen(8080);


// var http = require('http');

// var server = http.createServer();
// server.on('request', function(request, response) {
//   response.writeHead(200);
//   response.write("Hello, this is dog");
//   response.end();
// });
  
// server.on('request', function(request, response) {
//   console.log("New request coming in...");
// });

// server.on('close', function(){
//   console.log('Closing down the server...');
// });

// server.listen(8080);


var redis = require('redis');
var client = redis.createClient();
  var result = client.get('question', function(err, data) {
  console.log(data);
  });
client.set('name', 'nick');

  var question1 = "Where is the dog?";
  var question2 = "Where is the cat?";

  client.lpush("questions", question1, function(err, reply){
    console.log(reply);
  });
  
    client.lrange('questions', 0, -1, function(err, questions){
console.log(questions);
  });

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

io.sockets.on('connection', function(client) {
  redisClient.lrange('questions', 0, -1, function(err, questions){
questions.forEach(function(question){
   client.emit('question', question);
});
});

  // listen for answers here
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
        redisClient.lpush("questions", question,  function(){
    redisClient.ltrim("questions", 0, 19);
        });
    }
  }); 

});

