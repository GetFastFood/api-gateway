const servers = [
    "http://91.236.239.56:3003/api/v1/order/",
    "http://91.236.239.56:4003/api/v1/order/"
  ]
  
  let current = 0, server
  
  function handlerOrder(){
    server = servers[current]
          
    current === (servers.length - 1) ? current = 0 : current++
    console.log(server);
    return server;
  }

module.exports = handlerOrder;