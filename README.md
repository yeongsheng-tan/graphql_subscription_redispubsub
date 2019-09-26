## Start a local redis-server
#### MacOS
```
brew install redis
brew services start redis
```
#### Windows 10 x64
```
scoop install redis
redis-server
```

#### Start graphql server that publishes subscription events on redis pubsub channel messages
```
npm i
npm start
```
Launch browser and navigate to http://localhost:4000
Enter the following graphql subscription snippet to test receiving published graphql events
```
subscription {
  event(id: 56) {
    eventId
    eventCode
    awayJersey
  }
}
```

#### Start a local node repl that publishes js object literals to a specific redis pubsub channel to test graphql subscription publishing works
```
node
const { RedisPubSub } = require("graphql-redis-subscriptions");
const pubsub = new RedisPubSub();
pubsub.publish("event.56", { event: { eventId: 33, eventCode: "hello@World", awayJersey: 790 } });
```
On the above browser with your graphql playground tab @ http://localhost:4000, expect to see the incoming data payload:
```
{
  "data": {
    "event": {
      "eventId": 33,
      "eventCode": "hello@World",
      "awayJersey: "790"
    }
  }
}
```
