import { completion } from '../openai/completion.js';

interface IHumanKnowledge<U> {
  content: string;
  understanding: U;
}

export type { IHumanKnowledge };

interface IHuman {
  name: string;
}

class Human implements IHuman {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected async execution<T>(
    instructions: string,
    outcomeKey: string,
    knowledge: readonly IHumanKnowledge<T>[],
    content: string,
  ): Promise<string | undefined> {
    const promptHeader = instructions;
    const promptBody = knowledge.map(
      (item) => `CONTENT: ${item.content}\n${outcomeKey.toUpperCase()}: ${item.understanding}\n\n`,
    );
    const promptFooter = `CONTENT: ${content}\n${outcomeKey.toUpperCase()}:`;
    const prompt = `${promptHeader}${promptBody.join('')}${promptFooter}`;
    const value = (await completion.response(prompt)).text;

    return value.trim();
  }
}

export { Human };
