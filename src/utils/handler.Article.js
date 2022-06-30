const servers = [
    "http://91.236.239.56:3001/api/v1/article/",
    "http://91.236.239.56:4001/api/v1/article/"
  ]
  
  let current = 0, server
  
  function handlerArticle(){
    server = servers[current]
          
    current === (servers.length - 1) ? current = 0 : current++
    console.log(server);
    return server;
  }

module.exports = handlerArticle;