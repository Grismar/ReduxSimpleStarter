import { SELECT_FILEITEM, PLAYER_STOP } from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case PLAYER_STOP:
    case SELECT_FILEITEM:
      return action.payload.data.name;
  }

  return state;
}
