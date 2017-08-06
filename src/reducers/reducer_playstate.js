import {
  PLAYER_PLAY,
  PLAYER_PAUSE,
  PLAYER_STOP,
  SELECT_FILEITEM,
  PLAYER_WAITFORKNOWNSTATE
} from "../actions/index";

const initialState = {
  playState: 'stopped'
};

const playStates = ['unknown', 'playing', 'paused', 'stopped', 'closed'];

export default function (state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case SELECT_FILEITEM:
    case PLAYER_PLAY:
    case PLAYER_PAUSE:
    case PLAYER_STOP:
    case PLAYER_WAITFORKNOWNSTATE:
      return playStates[action.payload.data.playState];
  }

  return state;
}
