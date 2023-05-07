import inquirer from 'inquirer';
import { AgentCancelOrderWithId, OnAgentCancelOrderWithIdSuccess } from './agent/cancel-order-with-id.js';

type AgentName = 'AgentCancelOrderWithId';

const agentNameChoices: AgentName[] = ['AgentCancelOrderWithId'];

const inputSelectAgent = async (): Promise<unknown> =>
  await inquirer.prompt([
    {
      type: 'list',
      name: 'agent',
      message: 'Select an agent.',
      choices: agentNameChoices,
    },
  ]);

const inputContent = async (): Promise<unknown> =>
  await inquirer.prompt([
    {
      type: 'input',
      name: 'content',
      message: 'Content',
    },
  ]);

const onAgentCancelOrderWithIdSuccess: OnAgentCancelOrderWithIdSuccess = async (id: string) => {
  console.log(`Cancelling order with id ${id}`);
  return true;
};

async function main(): Promise<void> {
  const agentCancelOrderWithId = new AgentCancelOrderWithId();
  const agent = await inputSelectAgent();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const content = await inputContent();

    if (agent['agent'] === 'AgentCancelOrderWithId') {
      const resolved = await agentCancelOrderWithId.run(content['content'], onAgentCancelOrderWithIdSuccess);
      console.log(resolved);
    }
  }
}

main();
