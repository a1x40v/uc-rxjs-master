import { interval, Observer, tap } from "rxjs";

const observer: Partial<Observer<unknown>> = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete"),
};

const interval$ = interval(2000).pipe(
  tap((value) => console.log("new interval", value))
);

interval$.subscribe(observer);
interval$.subscribe(observer);

/*
    Uni-cast behaviour.
    With Observables each subscriber creates an individual 
  execution path between the observable and the observer.
    In the example above each subscription is getting it's own interval,
  rather than one interval being shared between both.
*/
