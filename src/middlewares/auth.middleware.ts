import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";

import { SIGN_IN, SIGN_UP } from "../actions/types";
import {
  AuthActions,
  signInFailed,
  signInSuccess,
  signUpFailed,
  signUpSuccess,
} from "../actions/auth.action";
import { getUserSuccess } from "../actions/user.action";

import { StoreType } from "../reducers/types";

import { postSignIn, postSignUp } from "../api/auth";
import { isRequestCancelled } from "../helpers/routing";
import { LS_KEYS } from "../constants/local-store";
import { setStorage } from "../utils/local-store";

export const authMiddleware: Middleware<Record<string, unknown>, StoreType> = ({
  getState,
  dispatch,
}: MiddlewareAPI) => {
  return (next: Dispatch<AnyAction>) => {
    return async (action: AuthActions) => {
      const nextAction = next(action);
      switch (action.type) {
        case SIGN_UP.SIGN_UP_REQUEST: {
          try {
            const { payload } = action as any;
            const { data } = await postSignUp(payload.email, payload.password);
            dispatch(signUpSuccess(data));
          } catch (error) {
            if (!isRequestCancelled(error)) {
              dispatch(signUpFailed());
            }
          }
          break;
        }

        case SIGN_IN.SIGN_IN_REQUEST: {
          try {
            const { payload } = action as any;
            const { data } = await postSignIn(payload.email, payload.password);
            setStorage(LS_KEYS.AUTH_TOKEN, data.token);
            dispatch(signInSuccess());
            dispatch(getUserSuccess(data));
          } catch (error) {
            if (!isRequestCancelled(error)) {
              dispatch(signInFailed());
            }
          }
          break;
        }
      }
      return nextAction;
    };
  };
};
