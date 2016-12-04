interface Array<T> {
  randomElement();
  shuffle();
}

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)]
};

Array.prototype.shuffle = function () {
  for (let i = this.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [this[i - 1], this[j]] = [this[j], this[i - 1]];
  }
};
