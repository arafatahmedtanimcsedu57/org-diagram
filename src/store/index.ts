import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/index";

import { authMiddleware } from "../middlewares/auth.middleware";
import { eventsMiddleware } from "../middlewares/events.middleware";
import { userMiddleware } from "../middlewares/use.middleware";

const middleware = applyMiddleware(
  authMiddleware,
  userMiddleware,
  eventsMiddleware
);

function configureStore(initialState?: ReturnType<typeof rootReducer>) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );

  return store;
}

export default configureStore;
