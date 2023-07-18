import { GET_USER, SIGN_OUT } from "../actions/types";
import { AuthState } from "./types/auth-state";
import { UserActions } from "../actions/user.action";

const initialState = {
  data: {},
  request: false,
};

const UserReducer = (state = initialState, action: UserActions): AuthState => {
  switch (action.type) {
    case GET_USER.GET_USER_REQUEST:
      return {
        ...state,
        data: {},
        request: true,
        success: false,
        failed: false,
      };

    case GET_USER.GET_USER_SUCCESS: {
      const { payload } = action as any;

      return {
        ...state,
        data: payload.data,
        request: false,
        success: true,
        failed: false,
      };
    }

    case GET_USER.GET_USER_FAILED:
      return {
        ...state,
        data: {},
        request: false,
        success: false,
        failed: true,
      };

    case SIGN_OUT.SIGN_OUT_REQUEST:
      return {
        ...state,
        data: {},
        request: false,
        success: false,
        failed: false,
      };

    default:
      return state;
  }
};

export default UserReducer;
