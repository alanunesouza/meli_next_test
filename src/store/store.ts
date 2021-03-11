import thunk from "redux-thunk";
import { applyMiddleware, createStore, Store } from "redux";

import reducers from "./modules/rootReducer";

const makeStore = (initialStore = {}): Store =>
  createStore(reducers, initialStore, applyMiddleware(thunk));

export { makeStore };
