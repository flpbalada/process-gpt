import { Human, IHumanKnowledge } from '../human/human.js';

class Agent extends Human {
  constructor() {
    super('agent');
  }
  protected async understandContent<U>(
    knowledge: readonly IHumanKnowledge<U>[],
    content: string,
    understadingKey: U,
  ): Promise<string> {
    const instructions = `Understanding can be only ${understadingKey} or unknown.\n\n`;
    const outcomeKey = 'UNDERSTANDING';
    const understanding = await super.execution<U>(instructions, outcomeKey, knowledge, content);
    return understanding;
  }

  protected async parseFromContent(
    knowledge: readonly IHumanKnowledge<string>[],
    content: string,
    entityName: string,
  ): Promise<string> {
    const instructions = `Parsed value represents ${entityName}.\n\n`;
    const outcomeKey = 'PARSED VALUE';
    const value = await super.execution<string>(instructions, outcomeKey, knowledge, content);
    return value;
  }
  protected async composeEmail(knowledge: readonly IHumanKnowledge<string>[], content: string): Promise<string> {
    const instructions = 'Composed email must always be closed with a greeting.';
    const outcomeKey = 'COMPOSE EMAIL';
    const value = await super.execution<string>(instructions, outcomeKey, knowledge, content);
    return value;
  }
}

export { Agent };
