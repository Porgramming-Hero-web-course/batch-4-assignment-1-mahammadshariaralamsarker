function countWordOccurrences(sentence:string, word:string) :number{
    const wordToArray = sentence.toLowerCase().split(' ');
    const targetWord = word.toLowerCase();
    return wordToArray.filter(w=> w==targetWord).length;
}