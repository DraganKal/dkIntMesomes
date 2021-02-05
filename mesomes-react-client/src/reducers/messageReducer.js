import { GET_RECEIVED_MESSAGES, GET_SENT_MESSAGES } from "../actions/types";

const initialState = {
  receivedMessages: [],
  sentMessages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECEIVED_MESSAGES:
      return {
        ...state,
        receivedMessages: action.payload,
      };
    case GET_SENT_MESSAGES:
      return {
        ...state,
        sentMessages: action.payload,
      };

    default:
      return state;
  }
}
