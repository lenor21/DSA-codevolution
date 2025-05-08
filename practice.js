// foobar

function fooBar(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('foobar');
    } else if (i % 3 === 0) {
      console.log('foo');
    } else if (i % 5 === 0) {
      console.log('bar');
    } else {
      console.log(i);
    }
  }
}

fooBar(30);

// console.log(fooBar(20));
