var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
              'h', 'i', 'j', 'k', 'l', 'm', 'n',
              'o', 'p', 'q', 'r', 's', 't', 'u',
              'v', 'w', 'x', 'y', 'z'];


function secret(message, keyword) {
  while (keyword.length < message.length) {
    keyword += keyword;
  }
  keyword.slice(0, message.length);
  var msgLetters = message.split('');
  var keyLetters = keyword.split('');
  var combinedVals = [];
  var finalLets = [];
  var encodedMsg;
  for (var i = 0; i < msgLetters.length; i++) {
    combinedVals.push(letters.indexOf(msgLetters[i]) + letters.indexOf(keyLetters[i]));
    if (combinedVals[i] > 25) {
      combinedVals[i] = combinedVals[i] - 25;
    }
    finalLets.push(letters[combinedVals[i]]);
  }
  return finalLets.join();
}
