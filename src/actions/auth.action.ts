import { SIGN_UP, SIGN_IN, SIGN_OUT } from "./types";

export const signUpRequest = (email: string, password: string) => {
  return {
    type: SIGN_UP.SIGN_UP_REQUEST,
    payload: {
      email,
      password,
    },
  } as const;
};

export const signUpSuccess = (data: any) => {
  return {
    type: SIGN_UP.SIGN_UP_SUCCESS,
    payload: { data },
  } as const;
};

export const signUpFailed = () => {
  return {
    type: SIGN_UP.SIGN_UP_FAILED,
  } as const;
};

export const signInRequest = (email: string, password: string) => {
  return {
    type: SIGN_IN.SIGN_IN_REQUEST,
    payload: {
      email,
      password,
    },
  } as const;
};

export const signInSuccess = () => {
  return {
    type: SIGN_IN.SIGN_IN_SUCCESS,
  } as const;
};

export const signInFailed = () => {
  return {
    type: SIGN_IN.SIGN_IN_FAILED,
  } as const;
};

export const signOutRequest = () => {
  return {
    type: SIGN_OUT.SIGN_OUT_REQUEST,
  } as const;
};

export type AuthActions =
  | ReturnType<typeof signUpRequest>
  | ReturnType<typeof signUpSuccess>
  | ReturnType<typeof signUpFailed>
  | ReturnType<typeof signInRequest>
  | ReturnType<typeof signInSuccess>
  | ReturnType<typeof signInFailed>
  | ReturnType<typeof signOutRequest>;
