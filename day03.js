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

const o2 = [11,10,9,8,7,6,5,4,3,2,1,0].reduce((nums, exp) => {
  if(nums.length < 2 ) return nums; 
  const mask = parseInt(
    [11,10,9,8,7,6,5,4,3,2,1,0].map(
      x => nums
        .map(y => (y & (1 << x))/(1 << x))
        .reduce((a, b) => a + b) >= nums.length / 2
    ).map(x => x ? 0 : 1).join('')
    , 2
  );
  return nums.filter(
    x => (x & (1 << exp)) == (mask & (1 << exp)) 
  )
}, raw)[0];

const co2 = [11,10,9,8,7,6,5,4,3,2,1,0].reduce((nums, exp) => {
  if(nums.length < 2 ) return nums; 
  const mask = parseInt(
    [11,10,9,8,7,6,5,4,3,2,1,0].map(
      x => nums
        .map(y => (y & (1 << x))/(1 << x))
        .reduce((a, b) => a + b) >= nums.length / 2
    ).map(x => x ? 0 : 1).join('')
    , 2
  );
  return nums.filter(
    x => (x & (1 << exp)) == (mask & (1 << exp)) 
  )
}, raw)[0];

console.log('part 1', ep * gam, 'part 2', o2 * co2)
