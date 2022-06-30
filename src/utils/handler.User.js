const servers = [
    "http://91.236.239.56:3005/api/v1/users/",
    "http://91.236.239.56:4005/api/v1/users/"
  ]
  
  let current = 0, server
  
  function handlerUser(){
    server = servers[current]
          
    current === (servers.length - 1) ? current = 0 : current++
    console.log(server);
    return server;
  }

module.exports = handlerUser;