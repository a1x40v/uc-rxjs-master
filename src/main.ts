import { Observer, Subject } from "rxjs";

const observer: Partial<Observer<unknown>> = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete"),
};

const subject = new Subject<unknown>();

const subscription = subject.subscribe(observer);
subject.next("Hello");

/*  Doesnt catch the first value "Hello" */
const subscriptionTwo = subject.subscribe(observer);
subject.next("World");
