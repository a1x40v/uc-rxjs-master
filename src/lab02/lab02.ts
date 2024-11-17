import { ObservableStore } from './store';

const store = new ObservableStore({
  user: 'Alex',
  isAuthenticated: false,
});

store.selectState('user').subscribe(console.log);

store.updateState({ user: 'Joe' });

/* no log in console because 'user' property hasn't changed */
store.updateState({ isAuthenticated: true });
