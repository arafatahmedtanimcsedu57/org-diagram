import { CREATE_EVENT, GET_EVENTS } from "./types";

export const createEventRequest = (data: any) => {
  return {
    type: CREATE_EVENT.CREATE_EVENT_REQUEST,
    payload: {
      data,
    },
  } as const;
};

export const createEventSuccess = (data: any) => {
  return {
    type: CREATE_EVENT.CREATE_EVENT_SUCCESS,
    payload: { data },
  } as const;
};

export const createEventFailed = () => {
  return {
    type: CREATE_EVENT.CREATE_EVENT_FAILED,
  } as const;
};

export const getEventsRequest = () => {
  return {
    type: GET_EVENTS.GET_EVENTS_REQUEST,
  } as const;
};

export const getEventsSuccess = (data: any) => {
  return {
    type: GET_EVENTS.GET_EVENTS_SUCCESS,
    payload: { data },
  } as const;
};

export const getEventsFailed = () => {
  return {
    type: GET_EVENTS.GET_EVENTS_FAILED,
  } as const;
};

export type EventActions =
  | ReturnType<typeof createEventRequest>
  | ReturnType<typeof createEventSuccess>
  | ReturnType<typeof createEventSuccess>
  | ReturnType<typeof getEventsRequest>
  | ReturnType<typeof getEventsSuccess>
  | ReturnType<typeof getEventsSuccess>;
