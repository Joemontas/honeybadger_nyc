import * as cookies from 'cookies-js'

export const fetchCookieType = 'FETCHING_COOKIE';

export function getCookie(name) {
    return function(dispatch) {
        dispatch({ type: fetchingCookieType, payload: cookies.get(name) });
    }
}

export const setCookieType = 'SETTING_COOKIE';

export function setCookie(name, value, options = {}) {
    return function(dipatch) {
        cookies.set(name, value, options);
        dispatch({ type: setCookieType, payload: cookies.get(name) });
    }
}