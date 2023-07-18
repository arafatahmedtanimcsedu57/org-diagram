import { UserType } from "../reducers/types/user-state";
import { GET_USER } from "./types";

export const getUserRequest = () => {
  return {
    type: GET_USER.GET_USER_REQUEST,
  } as const;
};

export const getUserSuccess = (data: UserType) => {
  return {
    type: GET_USER.GET_USER_SUCCESS,
    payload: { data },
  } as const;
};

export const getUserFailed = () => {
  return {
    type: GET_USER.GET_USER_FAILED,
  } as const;
};

export type UserActions =
  | ReturnType<typeof getUserRequest>
  | ReturnType<typeof getUserSuccess>
  | ReturnType<typeof getUserSuccess>;
