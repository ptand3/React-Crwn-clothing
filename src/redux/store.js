//Its a location where we define the state: the root reducer of our applications

import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import  rootReducer from "./root-reducer";

// eslint-disable-next-line
const middlewares = [logger];

const store = createStore(rootReducer ,applyMiddleware(...middlewares));

export default store;