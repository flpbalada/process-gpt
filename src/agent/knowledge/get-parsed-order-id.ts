import { IHumanKnowledge } from '../../human/human.js';

const AGENT_KNOWLEDGE_GET_PARSED_ORDER_ID: readonly IHumanKnowledge<string>[] =
  Object.freeze([
    {
      content: 'Hi. I would like to cancel my order with id #1254',
      understanding: '1254',
    },
    {
      content:
        'Dear Customer Service, I would like to cancel my order with the ID #84615. Can you please assist me with this request?',
      understanding: '84615',
    },
    {
      content:
        'Good day, I am reaching out to cancel my order with the ID #84615. Kindly confirm the cancellation and any necessary next steps.',
      understanding: '84615',
    },
    {
      content:
        'I would like to request a refund for my purchase with order number 161861.',
      understanding: '161861',
    },
    {
      content:
        'I would like to request a refund for my order with order number 417523.',
      understanding: '417523',
    },
    {
      content: 'I need to return the item I received with order number 187165.',
      understanding: '187165',
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

export { AGENT_KNOWLEDGE_GET_PARSED_ORDER_ID };
