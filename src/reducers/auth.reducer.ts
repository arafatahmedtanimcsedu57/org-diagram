import { AuthActions } from "../actions/auth.action";

import { SIGN_IN, SIGN_OUT } from "../actions/types";
import { AuthState } from "./types/auth-state";

const initialState = {
  request: false,
};

const AuthReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case SIGN_IN.SIGN_IN_REQUEST:
      return {
        ...state,
        request: true,
        success: false,
        failed: false,
      };

    case SIGN_IN.SIGN_IN_SUCCESS: {
      return {
        ...state,
        request: false,
        success: true,
        failed: false,
      };
    }

    case SIGN_IN.SIGN_IN_FAILED:
      return {
        ...state,
        request: false,
        success: false,
        failed: true,
      };

    case SIGN_OUT.SIGN_OUT_REQUEST:
      return {
        ...state,
        request: false,
        success: false,
        failed: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
