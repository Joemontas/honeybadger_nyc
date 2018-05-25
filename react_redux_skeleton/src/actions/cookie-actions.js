<<<<<<< HEAD
import * as cookies from 'cookies-js'
=======
import * as cookies from 'cookies-js';
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb

export const fetchCookieType = 'FETCHING_COOKIE';

export function getCookie(name) {
    return function(dispatch) {
<<<<<<< HEAD
        dispatch({ type: fetchingCookieType, payload: cookies.get(name) });
=======
        dispatch({ type: fetchCookieType, payload: cookies.get(name) });
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb
    }
}

export const setCookieType = 'SETTING_COOKIE';

export function setCookie(name, value, options = {}) {
<<<<<<< HEAD
    return function(dipatch) {
        cookies.set(name, value, options);
        dispatch({ type: setCookieType, payload: cookies.get(name) });
    }
}
=======
    return function(dispatch) {
        cookies.set(name, value, options);
        dispatch({ type: setCookieType, payload: cookies.get(name) });
    }
}
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb
