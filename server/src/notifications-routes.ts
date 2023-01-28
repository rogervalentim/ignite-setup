import WebPush from 'web-push';
import { FastifyInstance } from "fastify";

console.log(WebPush.generateVAPIDKeys())

const publicKey = 'BEX42psXLfbe6U3i3EbSyLobnMCuFiETk9d28QXPiclx7htCUajBoDlU0hhP473ybzscWdvX5qTs6Mz5F9qpf64'
const privateKey = 'HVNFt4Us1bdH5426pwyiCyI68ZjCkzLk5AkoS90X6kg'

WebPush.setVapidDetails(
    'http://localhost:3333',
    publicKey,
    privateKey
)

export async function notificationRoutes(app: FastifyInstance) {
    app.get('/push/public_key', () => {
        return {
            publicKey,
        }
    })
    
    app.post('/push/register', (request, reply) => {
        console.log(request.body)

        return reply.status(201).send()
    })

      
    app.post('/push/send', (request, reply) => {
        console.log(request.body)

        return reply.status(201).send()
    })
}