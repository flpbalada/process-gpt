import { IHumanKnowledge } from '../../human/human.js';

type AgentUnderstandsCancelOrderWithId = 'cancel_order_with_id' | 'unknown';

export type { AgentUnderstandsCancelOrderWithId };

const AGENT_KNOWLEDGE_CANCEL_ORDER_WITH_ID: readonly IHumanKnowledge<AgentUnderstandsCancelOrderWithId>[] =
  Object.freeze([
    {
      content: 'Hi. I would like to cancel my order with id #1254',
      understanding: 'cancel_order_with_id',
    },
    {
      content:
        'Dear Customer Service, I would like to cancel my order with the ID #84615. Can you please assist me with this request?',
      understanding: 'cancel_order_with_id',
    },
    {
      content:
        'Good day, I am reaching out to cancel my order with the ID #84615. Kindly confirm the cancellation and any necessary next steps.',
      understanding: 'cancel_order_with_id',
    },
    {
      content:
        'I would like to request a refund for my purchase with order number 161861.',
      understanding: 'cancel_order_with_id',
    },
    {
      content:
        'I would like to request a refund for my order with order number 417523.',
      understanding: 'cancel_order_with_id',
    },
    {
      content: 'I need to return the item I received with order number 187165.',
      understanding: 'cancel_order_with_id',
    },
    {
      content: 'Hi. Do you have this shoes in 12UK',
      understanding: 'unknown',
    },
    {
      content: 'Hi I want return money for my order.',
      understanding: 'unknown',
    },
    {
      content: 'Apple',
      understanding: 'unknown',
    },
    {
      content: 'I need to cancel my order before it ships.',
      understanding: 'unknown',
    },
    {
      content: 'I want to cancel my order.',
      understanding: 'unknown',
    },
    {
      content: 'Hi, I need to return the item I received.',
      understanding: 'unknown',
    },
    {
      content: 'Hello, I need to cancel my order immediately.',
      understanding: 'unknown',
    },
    {
      content: 'Good afternoon, I want to cancel my order as soon as possible.',
      understanding: 'unknown',
    },
  ]);

export { AGENT_KNOWLEDGE_CANCEL_ORDER_WITH_ID };
