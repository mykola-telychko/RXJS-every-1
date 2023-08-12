import { every } from 'rxjs/operators';
import { of, interval } from 'rxjs';

//emit 5 values
const source = of(1, 2, 3, 4, 5);
const src = of(22, 2, 66, 4, 6);

const example_1 = source.pipe(
  //is every value even?
  every((val) => val % 2 === 0)
);

const example_2 = src.pipe(
  //is every value even?
  every((val) => val % 2 === 0)
);

//output: false
// const subscribe = example.subscribe((val) => console.log(val));
const subscribe = example_2.subscribe((val) => console.log(val));
