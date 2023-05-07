import { IHumanKnowledge } from '../../human/human.js';

const EMAIL_TEMPLATE =
  'Dear %name ,\n\nI am writing to confirm that your order with ID %orderId has been cancelled.\n\nIf you have any further questions or concerns, please do not hesitate to contact us. We are always here to assist you.\n\nBest regards';

const AGENT_KNOWLEDGE_COMPOSE_EMAIL_CANCEL_ORDER_WITH_ID: readonly IHumanKnowledge<string>[] = Object.freeze([
  {
    content: 'orderId: 1254, customerName: Filip Balada',
    understanding: EMAIL_TEMPLATE.replace('%name', 'Filip').replace('%orderId', '1254'),
  },
  {
    content: 'orderId: 111415, customerName: Joe Spring',
    understanding: EMAIL_TEMPLATE.replace('%name', 'Joe').replace('%orderId', '111415'),
  },
  {
    content: 'orderId: 5df4saf7, customerName: William Novotny',
    understanding: EMAIL_TEMPLATE.replace('%name', 'William').replace('%orderId', '5df4saf7'),
  },
]);

export { AGENT_KNOWLEDGE_COMPOSE_EMAIL_CANCEL_ORDER_WITH_ID };
