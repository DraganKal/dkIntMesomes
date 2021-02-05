import axios from "axios";
import { GET_RECEIVED_MESSAGES, GET_SENT_MESSAGES, GET_ERRORS } from "./types";

export const sendMessage = (message, history) => async (dispatch) => {
  try {
    await axios.post("/api/messages", message);
    history.push("/sent");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getReceivedMessages = () => async (dispatch) => {
  const res = await axios.get("/api/messages/received");
  dispatch({
    type: GET_RECEIVED_MESSAGES,
    payload: res.data,
  });
};

export const getSentMessages = () => async (dispatch) => {
  const res = await axios.get("/api/messages/sent");
  dispatch({
    type: GET_SENT_MESSAGES,
    payload: res.data,
  });
};
