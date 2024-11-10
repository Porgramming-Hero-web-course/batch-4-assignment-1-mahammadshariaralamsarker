function countWordOccurrences(sentence, word) {
    var wordToArray = sentence.toLowerCase().split(' ');
    var targetWord = word.toLowerCase();
    return wordToArray.filter(function (w) { return w == targetWord; }).length;
}
