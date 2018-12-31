import * as websocket from 'ws';

const topic = "ws://pulsar:8080/ws/v2/producer/persistent/public/default/my-topic1";
let ws;

const getWSConnection = () => {
  if(!ws) {
    try {
      ws = new websocket(topic);
    } catch (err) {
      ws = getWSConnection();
    }
  }
  return ws;
}

const message = {
  "payload" : new Buffer("Hello World").toString('base64'),
  "properties": {
    "key1" : "value1",
    "key2" : "value2"
  },
  "context" : "1"
};

getWSConnection().on('message', function(message) {
  console.log('received ack', message);
});

export const sendMessage = async () => {

  return new Promise((res, rej) => {
    getWSConnection().send(JSON.stringify(message), (err) => {
      if(err) {
        rej(err);
      }
      res();
    });
  })
}


