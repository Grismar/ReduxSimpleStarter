import {combineReducers} from 'redux';

import browser_items_reducer from './reducer_browser_items';
import current_file_reducer from './reducer_current_file';
import volumestate_reducer from './reducer_volumestate';
import playstate_reducer from './reducer_playstate';
import playercurrenttype_reducer from './reducer_playercurrenttype';
import playerpreferredtype_reducer from './reducer_playerpreferredtype';
import position_reducer from './reducer_position';
import subtitles_reducer from './reducer_subtitles';
import audiotracks_reducer from './reducer_audiotracks';
import error_reducer from './reducer_error';
import browsing_reducer from './reducer_browsing';

const rootReducer = combineReducers({
  browser_items: browser_items_reducer,
  current_file: current_file_reducer,
  volume_state: volumestate_reducer,
  play_state: playstate_reducer,
  player_currenttype: playercurrenttype_reducer,
  player_preferredtype: playerpreferredtype_reducer,
  position: position_reducer,
  subtitles: subtitles_reducer,
  audioTracks: audiotracks_reducer,
  error: error_reducer,
  browsing: browsing_reducer
});

export default rootReducer;
