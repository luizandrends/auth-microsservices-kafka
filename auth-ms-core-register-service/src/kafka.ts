import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['http://kafka.social-feed.dev:9092'],
  ssl: true,
});

export { kafka };
