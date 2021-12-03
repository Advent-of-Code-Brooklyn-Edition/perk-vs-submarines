const raw = document.querySelector('pre')
    .innerText
    .split('\n')
    .map(x => parseInt(x, 2));

const ep = parseInt(
  [11,10,9,8,7,6,5,4,3,2,1,0].map(
    x => raw
      .map(y => (y & (1 << x))/(1 << x))
      .reduce((a, b) => a + b) >= raw.length / 2
  ).map(x => x ? 0 : 1).join('')
  , 2
);

const gam = parseInt(
  [11,10,9,8,7,6,5,4,3,2,1,0].map(
    x => raw
      .map(y => (y & (1 << x))/(1 << x))
      .reduce((a, b) => a + b) >= raw.length / 2
  ).map(x => x ? 1 : 0).join('')
  , 2
);

console.log('part 1', ep * gam, 'part 2')
