import {combineReducers} from 'redux';

import browser_items_reducer from './reducer_browser_items';
import current_file_reducer from './reducer_current_file';

const rootReducer = combineReducers({
    browser_items: browser_items_reducer,
    current_file: current_file_reducer
});

export default rootReducer;
