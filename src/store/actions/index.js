import { ACTION } from "./constanta";

export const setData = (payload) => ({
  type: ACTION.SET_DATA,
  payload,
});

export const getData = () => ({
  type: ACTION.GET_DATA,
});
