import { BehaviorSubject, Observer } from "rxjs";

export function lesson05() {
  const observer: Partial<Observer<unknown>> = {
    next: (val) => console.log("next", val),
    error: (err) => console.log("error", err),
    complete: () => console.log("complete"),
  };

  const subject = new BehaviorSubject("Hello");

  const subscription = subject.subscribe(observer);

  /*  Catch the first value "Hello" */
  const subscriptionTwo = subject.subscribe(observer);
  subject.next("World");

  setTimeout(() => {
    /*  Catch the last emitted value "World" */
    subject.subscribe(observer);
  }, 3000);
}
