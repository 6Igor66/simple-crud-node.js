const http = require('http');
const routeHandler = require('./routes/router');

let server = http.createServer(routeHandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});