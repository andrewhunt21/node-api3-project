// require your server and launch it
const server = require('./api/server.js')

const PORT = 9000

server.listen(PORT, () => {
    console.log('listening on Port:', PORT)
})
