const server = require ('./server');
const routes = require('./routes');
const db = require('./dal');
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
db.sync()
    .then(() => console.log("Conectado a la bd"))
    .catch((error) => console.log("Error en la conexión a la bd: "+ error));

server.use('/',routes());
