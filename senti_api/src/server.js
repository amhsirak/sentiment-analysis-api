import Hapi from 'hapi'
import { routes } from './routes'

const server = Hapi.server({
    host:'localhost',
    port: 5000
})

routes.forEach((route) => {
    server.route(route)
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