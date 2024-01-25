import fastify from 'fastify';
import { prisma } from './lib/prisma';
import cors from '@fastify/cors' 

const server = fastify()
server.register(cors)

server.get("/movies", async (req, reply) => {
    const movies = await prisma.movies.findMany();
    reply.send(movies);
});

server.post("/movies", async (req, reply) => {
    const { name,director,ano } = req.body
    const result = await prisma.movies.create({
      data: {
        name,
        director,
        ano
      },
    });
    reply.send(result);
});

server.delete('/movies/:moviesId', async (req, reply) => {
  const deleteUser = await prisma.movies.delete({
      where: {
        id: parseInt(req.params.moviesId)
      },
  })
})

server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
