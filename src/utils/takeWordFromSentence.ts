export const takeWordFromSentence = (sentence: string, countOfWord: number): string => {
  return sentence
    .split(" ")
    .reduce((acc, word) => {
      if (acc.length < countOfWord) {
        acc.push(word)
      }

      return acc
    }, [] as string[])
    .join(" ")
}
