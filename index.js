import Fastify from 'fastify'
import UserRouter from './src/routes/user.js'
 
import { connectDB } from './src/db.js'

const fastify = Fastify({

})


// // for performance user mongodb plugin . we can also use mongoose like express
// fastify.register(fastifyMongodb, {
//      // Ensures DB connection closes properly on shutdown
//      // url: "mongodb://localhost:27017/todo",
//      url: "mongodb+srv://drsuthar781:W816FiPhSpaMft2r@cluster0.duqgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
//      // W816FiPhSpaMft2r
// })

// console.log("MongoDB connected")

connectDB();


// lYzrjSYD7zwhgrdT

// registering a routes
fastify.register(UserRouter);


// testing a route
fastify.get('/', async function (request, reply) {
 
     reply.send({ hello: 'world' })
})

 

async function start() {

     try {




          await fastify.listen({ port: 3000, host: '0.0.0.0' });
          console.log("Server running on port 3000");


     } catch (error) {
          console.log(error)
          fastify.log.error(error);
          process.exit(1);


     }


     // Run the server!  ------------- ANOTHER WAY OF RUNNING THE SERVER
     // fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
     //      if (err) {
     //           fastify.log.error(err)
     //           process.exit(1)
     //      }
     //      // Server is now listening on ${address}
     // })
}


start();