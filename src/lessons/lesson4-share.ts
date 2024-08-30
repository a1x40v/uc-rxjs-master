import { interval, Observer, share, tap } from "rxjs";

export function lesson4() {
  const observer: Partial<Observer<unknown>> = {
    next: (val) => console.log("next", val),
    error: (err) => console.log("error", err),
    complete: () => console.log("complete"),
  };

  const interval$ = interval(2000).pipe(
    tap((value) => console.log("new interval", value))
  );

  const multicastedInterval$ = interval$.pipe(share());

  const subOne = multicastedInterval$.subscribe(observer);
  const subTwo = multicastedInterval$.subscribe(observer);

  setTimeout(() => {
    subOne.unsubscribe();
    subTwo.unsubscribe();
  }, 4000);
}
