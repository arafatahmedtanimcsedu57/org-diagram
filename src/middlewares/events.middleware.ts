import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";

import { StoreType } from "../reducers/types";

import { CREATE_EVENT, GET_EVENTS } from "../actions/types";
import {
  createEventFailed,
  createEventSuccess,
  getEventsSuccess,
  getEventsFailed,
} from "../actions/event.action";
import { AuthActions } from "../actions/auth.action";

import { isRequestCancelled } from "../helpers/routing";
import { createEvents, getEvents } from "../api/events";

export const eventsMiddleware: Middleware<
  Record<string, unknown>,
  StoreType
> = ({ getState, dispatch }: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return async (action: AuthActions) => {
      const nextAction = next(action);
      switch (action.type) {
        case CREATE_EVENT.CREATE_EVENT_REQUEST: {
          try {
            const { payload } = action as any;
            const { data } = await createEvents(payload);
            dispatch(createEventSuccess(data));
          } catch (error) {
            if (!isRequestCancelled(error)) {
              dispatch(createEventFailed());
            }
          }
          break;
        }

        case GET_EVENTS.GET_EVENTS_REQUEST: {
          try {
            const { data } = await getEvents(1);
            dispatch(getEventsSuccess(data));
          } catch (error) {
            if (!isRequestCancelled(error)) {
              dispatch(getEventsFailed());
            }
          }
          break;
        }
      }
      return nextAction;
    };
  };
};
