import { COLORCHANGED, STATUSCHANGED } from "./actionType";

export const colorChanged = (color, chnageType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      chnageType,
    },
  };
};

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
