import { AgentCancelOrderWithId } from '../src/agent/cancel-order-with-id.js';

const agentCancelOrderWithId = new AgentCancelOrderWithId();

const ok = [
  {
    content: 'Hi. I would like to cancel my order with id #846151',
    parsedOrderId: '846151',
  },
  {
    content: 'Hi I want return money for my order with number 12544.',
    parsedOrderId: '12544',
  },
  {
    content: 'Hello, I need to cancel my order #987654 immediately.',
    parsedOrderId: '987654',
  },
  {
    content: 'Hi there, I would like to request a refund for my purchase with order number 555123.',
    parsedOrderId: '555123',
  },
  {
    content: 'Good afternoon, I want to cancel my order #789456 as soon as possible.',
    parsedOrderId: '789456',
  },
  {
    content: 'Hi, I need to return the item I received with order number 654321.',
    parsedOrderId: '654321',
  },
  {
    content: 'Hello, I would like to cancel my order #123456 and receive a full refund.',
    parsedOrderId: '123456',
  },
  {
    content: 'Hi there, I want to request a refund for my purchase with order number 777888.',
    parsedOrderId: '777888',
  },
  {
    content: 'Good morning, I need to cancel my order #333444 before it ships.',
    parsedOrderId: '333444',
  },
  {
    content: 'Hi, I received the wrong item with order number 222333 and need to return it.',
    parsedOrderId: '222333',
  },
  {
    content: 'Hello, I want to cancel my order #111222 and receive a refund.',
    parsedOrderId: '111222',
  },
  {
    content: 'Hi there, I need to return the defective item I received with order number 444555.',
    parsedOrderId: '444555',
  },
];

const nok = [
  'Hi. I would like to cancel my order.',
  'Hi I want return money for my order.',
  'Hi there, I would like to request a refund for my purchase.',
  'Good afternoon, I want to cancel my order as soon as possible.',
  'Hi, I need to return the item I received.',
  'Hi there, I want to request a refund for my purchase.',
  'Good morning, I need to cancel my order before it ships.',
  'Hi, I received the wrong item and need to return it.',
  'Hi there, I need to return the defective item I received.',
  'The quick brown fox jumps over the lazy dog.',
  'She sells seashells by the seashore.',
  'The sky is a deep shade of blue on a clear day.',
  'The old oak tree stood tall and proud in the middle of the field.',
  'The sound of the waves crashing against the shore was soothing.',
  'The aroma of freshly baked bread filled the air.',
  'The city skyline was breathtaking at night, with all the lights twinkling like stars.',
];

describe('AgentCancelOrderWithId.isJobCancelOrderWithId', () => {
  ok.forEach((content) => {
    it(`ok: ${content.content}`, async () => {
      expect(await agentCancelOrderWithId.isJobCancelOrderWithId(content.content)).toBe(true);
    });
  });

  nok.forEach((content) => {
    it(`nok: ${content}`, async () => {
      expect(await agentCancelOrderWithId.isJobCancelOrderWithId(content)).toBe(false);
    });
  });
});

describe('AgentCancelOrderWithId.getParsedOrderId', () => {
  ok.forEach((content) => {
    it(`ok: ${content.content}`, async () => {
      expect(await agentCancelOrderWithId.getParsedOrderId(content.content)).toBe(content.parsedOrderId);
    });
  });

  nok.forEach((content) => {
    it(`ok: ${content}`, async () => {
      expect(await agentCancelOrderWithId.getParsedOrderId(content)).toBe('unknown');
    });
  });
});

describe('AgentCancelOrderWithId.run', () => {
  ok.forEach((content) => {
    it(`ok: ${content.content}`, async () => {
      expect((await agentCancelOrderWithId.run(content.content, async () => true)).status.isCancelled).toBe(true);
    });
  });

  nok.forEach((content) => {
    it(`nok: ${content}`, async () => {
      expect((await agentCancelOrderWithId.run(content, async () => true)).status.isCancelled).toBe(false);
    });
  });
});
