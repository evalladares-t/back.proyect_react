const Express = require('express');
const server = Express();

server.listen(3001,()=>{
    console.log('Server on port 3001');
});

module.exports = server;