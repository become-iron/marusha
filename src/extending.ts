interface Array<T> {
  randomElement();
  shuffle();
  nRandomElements(count: number);
  // nRandomElements2(count: number);
  includes(any): boolean;
}

Array.prototype.randomElement = function () {
  // http://stackoverflow.com/a/4550514
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


if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    let O = Object(this);
    let len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    let n = parseInt(arguments[1], 10) || 0;
    let k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    let currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
        (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}
