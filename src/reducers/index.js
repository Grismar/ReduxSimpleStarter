import {combineReducers} from 'redux';

import browser_items_reducer from './reducer_browser_items';
import current_file_reducer from './reducer_current_file';
import volumestate_reducer from './reducer_volumestate';
import playstate_reducer from './reducer_playstate';
import playertype_reducer from './reducer_playertype';

const rootReducer = combineReducers({
  browser_items: browser_items_reducer,
  current_file: current_file_reducer,
  volume_state: volumestate_reducer,
  play_state: playstate_reducer,
  player_type: playertype_reducer
});

export default rootReducer;
