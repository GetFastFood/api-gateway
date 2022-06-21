const servers = [
  "http://91.236.239.56:3004/api/v1/restaurant/",
  "http://91.236.239.56:4004/api/v1/restaurant/"
]

let current = 0, server

function handlerRestaurant(){
  server = servers[current]
        
  current === (servers.length - 1) ? current = 0 : current++
  console.log(server);
  return server;
}

module.exports = handlerRestaurant;