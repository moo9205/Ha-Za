require("dotenv").config();
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import schema from './schema';
const cors = require('cors');

const app = express();
const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res }),
  validationRules: [depthLimit(7)]
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/' });
// console.log('🔥', server);

const httpServer = createServer(app);
httpServer.listen({ port: 4000 }, (): void => console.log(`🚀 server Start`));
// console.log('💻', httpServer);
