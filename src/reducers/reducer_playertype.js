import {
  PLAYER_SWITCH,
  PLAYER_GETTYPE
} from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case PLAYER_GETTYPE:
    case PLAYER_SWITCH:
      return action.payload.data;
  }

  return state;
}
