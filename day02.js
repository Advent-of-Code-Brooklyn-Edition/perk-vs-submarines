// Day 2 run this in the console of the page with the problem input
console.log(
  'part 1',
  document.querySelector('pre')
    .innerText
    .split('\n')
    .filter(x => x)
    .reduce(([depth, forward, aim], s, i, a) => {
      const [direction, displacement_] = s.split(' ');
      const displacement = Number(displacement_);
      switch(direction[0]) {
        case 'f': return [depth, forward + displacement ];
        case 'd': return [depth + displacement, forward];
        case 'u': return [depth - displacement, forward];
        default: console.log('???', s, i, direction, displacement)
      } 
    }, [0, 0, 0])
    .reduce((a, b) => a * b)
,
  'part 2',
  document.querySelector('pre')
    .innerText
    .split('\n')
    .filter(x => x)
    .reduce(([depth, forward, aim], s, i, a) => {
      const [direction, displacement_] = s.split(' ');
      const displacement = Number(displacement_);
      switch(direction[0]) {
        case 'f': return [depth + aim * displacement, forward + displacement, aim ];
        case 'd': return [depth, forward, aim  + displacement];
        case 'u': return [depth, forward, aim  - displacement];
        default: console.log('???', s, i, direction, displacement) 
      }
    }, [0, 0, 0])
    .slice(0, 2)
    .reduce((a, b) => a * b)
);
