import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { Kafka } from 'kafkajs';

import routes from './routes';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092'],
});

const consumer = kafka.consumer({ groupId: 'auth-group' });

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export { app, consumer };
