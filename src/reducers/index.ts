import { combineReducers } from "redux";
import AuthReducer from "./auth.reducer";
import CreateEventReducer from "./events/create-event-reducer";
import GetEventsReducer from "./events/get-events-reducers";
import UserReducer from "./user.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  events: combineReducers({
    createEvent: CreateEventReducer,
    getEvents: GetEventsReducer,
  }),
});

export default rootReducer;
