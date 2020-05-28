const express = require('express');
const routes = require('./routes');
const {createClient} = require('redis');

const redisConfig = require('./config/redisConfig')

const server = express();

const subscriber = createClient(redisConfig);
const publisher = createClient(redisConfig);

let messageCount = 0;

subscriber.on("subscribe", function(channel, count) {
  publisher.publish("channel", count)
  publisher.publish("channel", "a message");
  publisher.publish("channel", "another message");
});

subscriber.on("message", function(channel, message) {
  messageCount += 1;
  console.log("Subscriber recebeu uma menssagem do canal '" + channel + "': " + message);
  if (messageCount === 2) {
    subscriber.unsubscribe();
    subscriber.quit();
    publisher.quit();
  }
});

server.use((request, response, next) => {
	request.subscriber = subscriber
	next()
})
server.use(routes)

server.listen(3000, () => {
	console.log(`Server running on port 3000`)
})
