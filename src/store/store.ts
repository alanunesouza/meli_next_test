import thunk from "redux-thunk";
import { applyMiddleware, createStore, Store } from "redux";

import reducers from "./modules/rootReducer";
import { createWrapper, MakeStore } from "next-redux-wrapper";

const makeStore: MakeStore<any> = (): Store =>
  createStore(reducers, applyMiddleware(thunk));

export { makeStore };

export const wrapper = createWrapper<any>(makeStore);

