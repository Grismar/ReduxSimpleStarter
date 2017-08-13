import { VOLUME_TOGGLEMUTE, VOLUME_SET, VOLUME_GETSTATE } from "../actions/index";

const initialState = {
  muted: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case VOLUME_TOGGLEMUTE:
    case VOLUME_SET:
    case VOLUME_GETSTATE:
      if (!action.error) {
        return action.payload.data;
      }
  }

  return state;
}
