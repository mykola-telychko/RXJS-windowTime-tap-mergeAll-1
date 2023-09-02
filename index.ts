import { timer } from 'rxjs';
import { windowTime, tap, mergeAll } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/windowtime
// Example 1: Open new window every specified duration

//emit immediately then every 1s
const srcTimer$ = timer(0, 1000);
const example = srcTimer$.pipe(
  //start new window every 3s
  windowTime(3000),
  tap((_) => console.log('NEW WINDOW!'))
);

const subscribeTwo = example
  .pipe(
    //window emits nested observable
    mergeAll()
  )
  .subscribe((val) => console.log(val));

/*
            output:
            "NEW WINDOW!"
            0
            1
            2
            "NEW WINDOW!"
            3
            4
            5
*/
