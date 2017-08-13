import {
  SELECT_FILEITEM,
  PLAYER_STOP,
  PLAYER_WAITFORKNOWNSTATE,
  PLAYER_SELECTSUBTITLE
} from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case PLAYER_STOP:
    case SELECT_FILEITEM:
    case PLAYER_WAITFORKNOWNSTATE:
      if (!action.error) {
        return action.payload.data.subtitles;
      }
      break;
    case PLAYER_SELECTSUBTITLE:
      if (!action.error) {
        return action.payload.data;
      }
  }

  return state;
}
