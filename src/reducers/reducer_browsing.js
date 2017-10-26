import { SET_BROWSING } from "../actions/index";

export default function (state = true, action) {
  switch (action.type) {
    case SET_BROWSING:
      return action.payload;
  }

  return state;
}
