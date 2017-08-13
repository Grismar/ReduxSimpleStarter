import {
  PLAYER_SKIPTO,
  PLAYER_WAITFORKNOWNSTATE,
  SELECT_FILEITEM,
  PLAYER_STOP
} from "../actions/index";

const initialState = {
  duration: 0,
  current: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PLAYER_STOP:
    case SELECT_FILEITEM:
    case PLAYER_SKIPTO:
    case PLAYER_WAITFORKNOWNSTATE:
      if (!action.error) {
        return action.payload.data.position;
      }
  }

  return state;
}
