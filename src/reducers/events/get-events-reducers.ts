import { EventActions } from "../../actions/event.action";
import { CREATE_EVENT, GET_EVENTS } from "../../actions/types";
import { GetEventsState } from "../../reducers/types/event-state";

const initialState: GetEventsState = {
  request: false,
};

const GetEventsReducers = (
  state = initialState,
  action: EventActions
): GetEventsState => {
  switch (action.type) {
    case GET_EVENTS.GET_EVENTS_REQUEST:
      return {
        ...state,
        data: [],
        request: true,
        success: false,
        failed: false,
      };

    case GET_EVENTS.GET_EVENTS_SUCCESS: {
      const { payload } = action as any;

      return {
        ...state,
        data: payload.data,
        request: false,
        success: true,
        failed: false,
      };
    }

    case CREATE_EVENT.CREATE_EVENT_SUCCESS: {
      const { payload } = action as any;
      return {
        ...state,
        data: [payload.data, ...(state.data ? state.data : [])],
      };
    }

    case GET_EVENTS.GET_EVENTS_FAILED:
      return {
        ...state,
        data: [],
        request: false,
        success: false,
        failed: true,
      };
    default:
      return state;
  }
};

export default GetEventsReducers;
