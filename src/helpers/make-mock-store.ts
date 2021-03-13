import thunk from 'redux-thunk';
import configureMockStore, { MockStore } from 'redux-mock-store';

export const startState = {};

export const mockStore = configureMockStore([thunk]);

export const makeMockStore = (state: any = {}): MockStore => {
  return mockStore({
    ...startState,
    ...state,
  });
};
