import Hapi from 'hapi'

const server = Hapi.server({
    host:'localhost',
    port: 5000
})

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h){
        return 'This is home'
    }
})

server.route({
    method: 'GET',
    path: '/sentilize',
    handler: function (request, h){
        return 'This is sentilize'
    }
})

const start = async() =>{
    try {
        await server.start()
    } catch (err) {
        console.log(err)
    }
    console.log('Hapiiii server running')
}

start()