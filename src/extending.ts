interface Array<T> {
  randomElement();
  shuffle();
  nRandomElements(count: number);
  // nRandomElements2(count: number);
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

Array.prototype.nRandomElements = function (count: number) {
  let _ = this.slice();
  _.shuffle();
  return _.slice(0, count);
};

// Array.prototype.nRandomElements2 = function (count: number) {
//   console.time('mur');
//   // Object[] getN(list) {
//   //   for (int i = 0; i < 4; ++i) {
//   //     swap(list.get(random() % 104),list.get(list.size() - i - 1));
//   //   }
//   //   return list.sublist(list.size() - 4).toArray();
//   // }
//   let arr = this.slice();
//   let l2 = arr.length - count;
//   for (let i = 0; i < count; i++) {
//     let l = arr.length - i - 1;
//     let r = Math.random() % (l2);
//     let tmp = arr[r];
//     arr[r] = arr[l];
//     arr[l] = tmp;
//   }
//   console.timeEnd('mur');
//   return arr.slice(0, l2);
// };
