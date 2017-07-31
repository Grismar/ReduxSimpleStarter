import axios from 'axios';

export const SELECT_FILEITEM = 'SELECT_FILEITEM';
export const FETCH_DIRECTORY = 'FETCH_DIRECTORY';

export function selectFileItem(fileItem) {
    return {
        type: SELECT_FILEITEM,
        payload: fileItem
    }
}

export function fetchDirectory(directoryItem, fetchUrl) {
    const promise = axios.get(fetchUrl);

    return {
        type: FETCH_DIRECTORY,
        payload: promise
    }
}
