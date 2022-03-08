import { RecordMetadata } from 'kafkajs';
import { kafka } from '../../../../kafka';

interface EventPayloadValue {
  kafka: {
    topicName: string;
  };
  userId: any;
  email: string;
  password: string;
}

export const sendEvent = async (
  payload: EventPayloadValue
): Promise<RecordMetadata[]> => {
  const producer = kafka.producer();

  await producer.connect();

  const parsedPayload = JSON.stringify(payload);

  const message = await producer.send({
    topic: payload.kafka.topicName,
    messages: [{ value: parsedPayload }],
  });

  await producer.disconnect();

  return message;
};
