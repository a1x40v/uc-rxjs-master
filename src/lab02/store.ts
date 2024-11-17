import {
  BehaviorSubject,
  distinctUntilKeyChanged,
  pluck,
  scan,
  Subject,
} from 'rxjs';

interface StateInterface {
  user: string;
  isAuthenticated: boolean;
}

export class ObservableStore {
  private _store: BehaviorSubject<StateInterface>;
  private _stateUpdates: Subject<Partial<StateInterface>>;

  constructor(initialState: StateInterface) {
    this._store = new BehaviorSubject(initialState);
    this._stateUpdates = new Subject();

    // accumulate state
    this._stateUpdates
      .pipe(
        scan((acc, curr) => {
          return { ...acc, ...curr };
        }, initialState)
      )
      .subscribe(this._store);
  }

  updateState(stateUpdate: Partial<StateInterface>) {
    this._stateUpdates.next(stateUpdate);
  }

  selectState(stateKey: keyof StateInterface) {
    return this._store.pipe(distinctUntilKeyChanged(stateKey), pluck(stateKey));
  }

  stateChanges() {
    return this._store.asObservable();
  }
}
