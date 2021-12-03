// Day 1
console.log(
  'part 1',
  document.querySelector('pre')
    .innerText
    .split('\n')
    .map(Number)
    .filter((v, i, a) => i && v > a[i - 1])
    .length,
  'part 2',
  document.querySelector('pre')
    .innerText
    .split('\n')
    .map(Number)
    .map((v, i, a) => i > 1 && v + a[i - 1] + a[i - 2])
    .slice(2)
    .filter((v, i, a) => i && v > a[i - 1])
    .length
);
