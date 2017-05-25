import createStore from './createStore.js';

test('createStore', () => {
  const store = createStore(state => state, {});
  expect(typeof store.dispatch === 'function').toBe(true);
});
