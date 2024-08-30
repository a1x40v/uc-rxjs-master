import { fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

const position$ = click$.pipe(
  map((event) => ({ x: event.clientX, y: event.clientY })),
  filter((position) => position.x > 100)
);

position$.subscribe((position) => console.log(position));
