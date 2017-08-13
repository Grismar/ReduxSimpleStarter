import {
  PLAYER_SWITCH,
  PLAYER_PLAY,
  PLAYER_PAUSE,
  PLAYER_STOP,
  SELECT_FILEITEM,
  PLAYER_WAITFORKNOWNSTATE
} from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_FILEITEM:
    case PLAYER_PLAY:
    case PLAYER_PAUSE:
    case PLAYER_STOP:
    case PLAYER_WAITFORKNOWNSTATE:
    case PLAYER_SWITCH:
      if (!action.error) {
        return action.payload.data.preferredPlayerType;
      }
  }

  return state;
}
