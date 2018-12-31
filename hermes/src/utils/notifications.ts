import * as websocket from 'ws';

const ptopic = "ws://pulsar:8080/ws/v2/producer/persistent/public/default/my-topic1";
const stopic = "ws://pulsar:8080/ws/v2/consumer/persistent/public/default/my-topic1/exclusive"

let pws;
const getProductionWS = () => {
  if(!pws) {
    try {
      pws = new websocket(ptopic);
    } catch (err) {
      pws = getProductionWS();
    }
  }
  return pws;
}

let cws;
const getConsumptionSocket = () => {
  if(!cws) {
    try {
      cws = new websocket(stopic);
    } catch (err) {
      cws = getConsumptionSocket();
    }
  }
  return cws;
}

const message = {
  "payload" : new Buffer("Hello World").toString('base64'),
  "properties": {
    "key1" : "value1",
    "key2" : "value2"
  },
  "context" : "1"
};

getConsumptionSocket().on('message', function(message) {
  console.log('received ack', message);
});



export const sendMessage = async () => {

  return new Promise((res, rej) => {
    getProductionWS().send(JSON.stringify(message), (err) => {
      if(err) {
        rej(err);
      }
      res();
    });
  })
}


