import axios from 'axios';

export const apiHost = 'http://cathedral:5000';

export const SELECT_FILEITEM = 'SELECT_FILEITEM';
export const FETCH_DIRECTORY = 'FETCH_DIRECTORY';

export const PLAYER_BACK = 'PLAYER_BACK';
export const PLAYER_PLAY = 'PLAYER_PLAY';
export const PLAYER_PAUSE = 'PLAYER_PAUSE';
export const PLAYER_FORWARD = 'PLAYER_FORWARD';
export const PLAYER_STOP = 'PLAYER_STOP';
export const PLAYER_WAITFORKNOWNSTATE = 'PLAYER_WAITFORKNOWNSTATE';
export const PLAYER_SWITCH = 'PLAYER_SWITCH';
export const PLAYER_GETTYPE = 'PLAYER_GETTYPE';

export const VOLUME_TOGGLEMUTE = 'VOLUME_TOGGLEMUTE';
export const VOLUME_SET = 'VOLUME_SET';
export const VOLUME_GETSTATE = 'VOLUME_GETSTATE';

export const INFO_DISPLAY = 'INFO_DISPLAY';

export function selectFileItem(urlPath) {
  const promise = axios.get(`${apiHost}/v1/player/play/${urlPath}`);

  return {
    type: SELECT_FILEITEM,
    payload: promise
  }
}

export function fetchDirectory(urlPath) {
  const promise = axios.get(`${apiHost}/v1/browser/list/${urlPath}`);

  return {
    type: FETCH_DIRECTORY,
    payload: promise
  }
}

export function playerBack(by = 30) {
  const promise = axios.get(`${apiHost}/v1/player/skipback?by=${by}`);

  return {
    type: PLAYER_BACK,
    payload: promise
  }
}

export function playerPlay() {
  const promise = axios.get(`${apiHost}/v1/player/play`);

  return {
    type: PLAYER_PLAY,
    payload: promise
  }
}

export function playerPause() {
  const promise = axios.get(`${apiHost}/v1/player/pause`);

  return {
    type: PLAYER_PAUSE,
    payload: promise
  }
}

export function playerForward(by = 30) {
  const promise = axios.get(`${apiHost}/v1/player/skipforward?by=${by}`);

  return {
    type: PLAYER_FORWARD,
    payload: promise
  }
}

export function playerStop() {
  const promise = axios.get(`${apiHost}/v1/player/close`);

  return {
    type: PLAYER_STOP,
    payload: promise
  }
}

export function playerSwitch(current) {
  let promise;
  if (current==='vlc') {
     promise = axios.get(`${apiHost}/v1/player/wmp`);
  } else {
     promise = axios.get(`${apiHost}/v1/player/vlc`);
  }

  return {
    type: PLAYER_SWITCH,
    payload: promise
  }
}

export function playerGetType() {
  const promise = axios.get(`${apiHost}/v1/player/gettype`);

  return {
    type: PLAYER_GETTYPE,
    payload: promise
  }
}

export function pollPlayerState() {
  const promise = axios.get(`${apiHost}/v1/player/waitforknownstate`);

  return {
    type: PLAYER_WAITFORKNOWNSTATE,
    payload: promise
  }
}

export function volumeToggleMute() {
  const promise = axios.get(`${apiHost}/v1/player/togglemute`);

  return {
    type: VOLUME_TOGGLEMUTE,
    payload: promise
  }
}

export function volumeSet(percentage) {
  const promise = axios.get(`${apiHost}/v1/player/volumeto?percentage=${percentage}`);

  return {
    type: VOLUME_SET,
    payload: promise
  }
}

export function getVolumeState() {
  const promise = axios.get(`${apiHost}/v1/player/getvolumestate`);

  return {
    type: VOLUME_GETSTATE,
    payload: promise
  }
}

export function infoDisplay() {
  axios.get(`${apiHost}/v1/player/infodisplay`);

  return {
    type: INFO_DISPLAY
  }
}
