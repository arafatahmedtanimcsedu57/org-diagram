import { EventActions } from "../../actions/event.action";
import { CREATE_EVENT } from "../../actions/types";
import { CreateEventState } from "../../reducers/types/event-state";

const initialState: CreateEventState = {
  request: false,
};

const createEventReducer = (
  state = initialState,
  action: EventActions
): CreateEventState => {
  switch (action.type) {
    case CREATE_EVENT.CREATE_EVENT_REQUEST:
      return {
        ...state,
        request: true,
        success: false,
        failed: false,
      };

    case CREATE_EVENT.CREATE_EVENT_SUCCESS: {
      return {
        ...state,
        request: false,
        success: true,
        failed: false,
      };
    }

    case CREATE_EVENT.CREATE_EVENT_FAILED:
      return {
        ...state,
        request: false,
        success: false,
        failed: true,
      };

    default:
      return state;
  }
};

export default createEventReducer;
