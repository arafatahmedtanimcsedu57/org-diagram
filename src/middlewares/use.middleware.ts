import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";
import { StoreType } from "../reducers/types";

import { GET_USER } from "../actions/types";
import {
  UserActions,
  getUserFailed,
  getUserSuccess,
} from "../actions/user.action";

import { getUser } from "../api/user";
import { isRequestCancelled } from "../helpers/routing";

export const userMiddleware: Middleware<Record<string, unknown>, StoreType> = ({
  getState,
  dispatch,
}: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return async (action: UserActions) => {
      const nextAction = next(action);
      switch (action.type) {
        case GET_USER.GET_USER_REQUEST: {
          try {
            const { data } = await getUser();
            dispatch(getUserSuccess(data));
          } catch (error) {
            if (!isRequestCancelled(error)) {
              dispatch(getUserFailed());
            }
          }
          break;
        }
      }
      return nextAction;
    };
  };
};
