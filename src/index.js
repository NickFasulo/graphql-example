import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import { resolver } from './resolver';
import { typeDefs } from './typeDefs';

const server = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolver
  });

  server.applyMiddleware({ app });

  try {
    await mongoose.connect(
      'mongodb+srv://Nick_F:<password>@cluster0-apwvk.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true }
    );
  } catch (err) {
    console.log(err);
  }

  await mongoose.connect(
    'mongodb+srv://Nick_F:<password>@cluster0-apwvk.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  );

  app.get('/', (req, res) => res.send('hello world'));

  app.listen({ port: 4001 }, () => {
    console.log(`connected`);
  });
};

server();
