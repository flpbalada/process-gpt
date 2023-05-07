/**
 * # Agent Cancel Order With ID
 * The agent is dedicated to receiving a text and determining whether it is a request for order cancellation that includes an ID.
 * The agent will pass the request to the callback function if it recognizes and parses the ID.
 * The callback is used for interacting with third party systems such as CRM a product CMS. So that we can cancel the order if exists.
 * The callback function returns a boolean value. If the value is false, we can infer that the order has not been cancelled. This allows us to compose an appropriate response for this scenario.
 *
 */

import { Agent } from './agent.js';
import {
  AGENT_KNOWLEDGE_CANCEL_ORDER_WITH_ID,
  AgentUnderstandsCancelOrderWithId,
} from './knowledge/cancel-order-with-id.js';
import { AGENT_KNOWLEDGE_GET_PARSED_ORDER_ID } from './knowledge/get-parsed-order-id.js';
import { AGENT_KNOWLEDGE_COMPOSE_EMAIL_CANCEL_ORDER_WITH_ID } from './knowledge/compose-email-cancel-order-with-id.js';

type OnAgentCancelOrderWithIdSuccess = (id: string, emailSuccess: string) => Promise<boolean>;

type AgentCancelOrderWithIdRunResponse = {
  status: {
    isCancelled: boolean;
  };
  order?: {
    id: string;
  };
  answer?: {
    text: string;
  };
};

export type { OnAgentCancelOrderWithIdSuccess };

interface IAgentCancelOrderWithId {
  isJobCancelOrderWithId: (content: string) => Promise<boolean>;
  getParsedOrderId: (content: string) => Promise<string | undefined>;
  composeEmailOrderCancelled: (orderId: string, customerName: string) => Promise<string>;
  run: (content: string, onSuccess: OnAgentCancelOrderWithIdSuccess) => Promise<AgentCancelOrderWithIdRunResponse>;
}
class AgentCancelOrderWithId extends Agent implements IAgentCancelOrderWithId {
  constructor() {
    super();
  }
  public async isJobCancelOrderWithId(content: string): Promise<boolean> {
    const job = await super.understandContent<AgentUnderstandsCancelOrderWithId>(
      AGENT_KNOWLEDGE_CANCEL_ORDER_WITH_ID,
      content,
      'cancel_order_with_id',
    );
    return job === 'cancel_order_with_id';
  }

  public async getParsedOrderId(content: string): Promise<string | undefined> {
    const value = await super.parseFromContent(AGENT_KNOWLEDGE_GET_PARSED_ORDER_ID, content, 'order ID');
    return value.length > 0 ? value : undefined;
  }

  public async composeEmailOrderCancelled(orderId: string, customerName: string): Promise<string> {
    const content = `orderId: ${orderId}, customerName: ${customerName}`;
    const email = await super.composeEmail(AGENT_KNOWLEDGE_COMPOSE_EMAIL_CANCEL_ORDER_WITH_ID, content);
    return email;
  }

  public async run(
    content: string,
    onSuccess: OnAgentCancelOrderWithIdSuccess,
  ): Promise<AgentCancelOrderWithIdRunResponse> {
    const isJob = await this.isJobCancelOrderWithId(content);
    const orderId = await this.getParsedOrderId(content);
    if (isJob && orderId && orderId.length > 0 && orderId !== 'unknown') {
      const emailSuccess = await this.composeEmailOrderCancelled(orderId, 'Customer');
      const onSuccessResponse = await onSuccess(orderId, emailSuccess);
      return {
        status: {
          isCancelled: onSuccessResponse,
        },
        order: {
          id: orderId,
        },
        answer: {
          text: emailSuccess,
        },
      };
    }
    return {
      status: {
        isCancelled: false,
      },
    };
  }
}

export { AgentCancelOrderWithId };
