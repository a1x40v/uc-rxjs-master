import { connectable, interval, multicast, Observer, Subject, tap } from "rxjs";

export function lesson4() {
  const observer: Partial<Observer<unknown>> = {
    next: (val) => console.log("next", val),
    error: (err) => console.log("error", err),
    complete: () => console.log("complete"),
  };

  const interval$ = interval(2000).pipe(
    tap((value) => console.log("new interval", value))
  );

  /* deprecated */
  // const multicastedInterval$ = interval$.pipe(multicast(() => new Subject()));

  const multicastedInterval$ = connectable(interval$, {
    connector: () => new Subject(),
  });

  const connectedSub = multicastedInterval$.connect();

  const subOne = multicastedInterval$.subscribe(observer);
  const subTwo = multicastedInterval$.subscribe(observer);

  setTimeout(() => {
    /*  interval stream won't stop */
    // subOne.unsubscribe();
    // subTwo.unsubscribe();

    connectedSub.unsubscribe();
  }, 4000);
}
