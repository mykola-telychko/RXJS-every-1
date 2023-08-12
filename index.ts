import { every } from 'rxjs/operators';
import { of, interval } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/conditional/every

//emit 5 values
const source = of(1, 2, 3, 4, 5); // false (because not all is even)
const src = of(22, 2, 66, 4, 6); // every value even

const example_1 = source.pipe(
  //is every value even?
  every((val) => val % 2 === 0)
);

const example_2 = src.pipe(
  //is every value even?
  every((val) => val % 2 === 0)
);

//output: false
// const subscribe = example_1.subscribe((val) => console.log(val));
const subscribe = example_2.subscribe((val) => console.log(val));
