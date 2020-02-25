//Its a location where we define the state: the root reducer of our applications

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist" ;
import { logger } from "redux-logger";
import  rootReducer from "./root-reducer";

// eslint-disable-next-line
const middlewares = [logger];

export const store = createStore(rootReducer ,applyMiddleware(...middlewares));

export const persistor = persistStore(store) //persisted version of store using persistor object

