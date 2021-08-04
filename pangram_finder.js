const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.lowerPhrase = phrase.toLowerCase();
  this.phraseArray = this.lowerPhrase.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(character => this.phraseArray.includes(character));
}

module.exports = PangramFinder;
