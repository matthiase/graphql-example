import cors from 'cors'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import schema from './schema'
import resolvers from './resolvers'
import models, { sequelize } from './models'

const resetDatabaseOnSync = true
sequelize.sync({ force: resetDatabaseOnSync }).then(async () => {
  if (resetDatabaseOnSync) {
    seedDatabase()
  }

  const app = express()
  app.use(cors())

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: async () => ({
      models,
      me: await models.User.findByPk(1)
    })
  })

  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 8000;
  app.listen({ port: PORT }, () => {
    console.log(`Apollo Server running: http://localhost:${PORT}/graphql`)
  })
})


const seedDatabase = async () => {
  await models.User.create({
    username: 'matthias',
    messages: [
      { text: 'Hello world!' },
      { text: 'This is a test.' }
    ]
  },
  {
    include: [models.Message]
  })
}

