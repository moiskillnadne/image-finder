import { takeWordFromSentence } from './takeWordFromSentence';

describe('takeWordFromSentence', () => {
  it('should return first 2 word "hello world"', () => {
    const testString = 'hello world and people';
    const testWordCount = 2;

    const result = takeWordFromSentence(testString, testWordCount);

    expect(result).toEqual('hello world');
  });
});
