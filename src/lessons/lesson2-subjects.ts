import { interval, Observer, Subject, tap } from "rxjs";

export function lesson2() {
  const observer: Partial<Observer<unknown>> = {
    next: (val) => console.log("next", val),
    error: (err) => console.log("error", err),
    complete: () => console.log("complete"),
  };

  const subject = new Subject<unknown>();

  const interval$ = interval(2000).pipe(
    tap((value) => console.log("new interval", value))
  );

  interval$.subscribe(subject);

  const subscription = subject.subscribe(observer);
  const subscriptionTwo = subject.subscribe(observer);
}

/*
    Multi-cast behaviour.
    Subjects are observers with the next() methods but insted of
  us calling next() method manually in this case, the interval will now
  be calling next() on any emitted value.
    Any observers of the subject will then recieve the value. In this case are
  two subscribers created above will be notified.
*/
