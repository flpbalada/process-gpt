import { CreateCompletionRequest, CreateCompletionResponseChoicesInner } from 'openai';
import { openai } from './openai.js';

class Completion {
  private defaultConfig: CreateCompletionRequest = {
    model: 'text-davinci-003',
    temperature: 0,
    max_tokens: 2048,
    n: 1,
  };
  public async response(prompt: string): Promise<CreateCompletionResponseChoicesInner> {
    try {
      const response = await openai.createCompletion({
        ...this.defaultConfig,
        prompt,
      });
      return response?.data?.choices[0] ?? undefined;
    } catch (error) {
      throw new Error(error);
    }
  }
}

const completion = new Completion();

export { completion };
