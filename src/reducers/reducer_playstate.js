import {
  PLAYER_PLAY,
  PLAYER_PAUSE,
  PLAYER_STOP,
  SELECT_FILEITEM,
  PLAYER_WAITFORKNOWNSTATE
} from "../actions/index";

const initialState = {
  playState: 'unknown'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_FILEITEM:
    case PLAYER_PLAY:
    case PLAYER_PAUSE:
    case PLAYER_STOP:
    case PLAYER_WAITFORKNOWNSTATE:
      if (!action.error) {
        return action.payload.data.playState;
      }
  }

  return state;
}
