const servers = [
    "http://91.236.239.56:3002/api/v1/menu/",
    "http://91.236.239.56:4002/api/v1/menu/"
  ]
  
  let current = 0, server
  
  function handlerMenu(){
    server = servers[current]
          
    current === (servers.length - 1) ? current = 0 : current++
    console.log(server);
    return server;
  }

module.exports = handlerMenu;