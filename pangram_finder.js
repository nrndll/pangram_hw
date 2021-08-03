const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.lowerPhrase = phrase.toLowerCase();
  this.phraseArray = this.lowerPhrase.split('');
}

PangramFinder.prototype.isPangram = function () {
  const result = this.alphabet.every(character => this.phraseArray.includes(character));
  if (result) {
    return result;
  } else {
    return false;
  };
}

module.exports = PangramFinder;
