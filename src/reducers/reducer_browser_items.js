import { FETCH_DIRECTORY } from "../actions/index";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_DIRECTORY:
            return action.payload.data;
    }
    return state;
}
