import axios from 'axios';
import { setCookie } from './cookie-actions';

export const fetchUserType = 'FETCH_USER_FULFILLED';

<<<<<<< HEAD
export function fetchUser() {
    return function(dispatch) {
        dispatch({ type: 'FETCHING_USER'})
=======
export function fetchUser(id) {
    return function(dispatch) {
        dispatch({ type: 'FETCHING_USER' })

        axios.get(`/users/${id}`)
            .then(function(response) {
                //dispatch user found success
            })
            .catch(function(err) {
                //dispatch user not found error
            })
    }
}

export const userCreatedType = 'USER_CREATED';
export const userCreationError = 'USER_CREATION_ERROR';

export function createUser(data) {
    return function(dispatch) {
        dispatch({ type: 'CREATING_USER' });
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb

        axios.get(`/users/${id}`)
            .then(function(response) {
<<<<<<< HEAD

=======
                //dispatch success action
                dispatch(setCookie('user_id', response.data.user.id, { expires: 86400 }));
                dispatch({ type: userCreatedType, payload: response.data.user });
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb
            })
            .catch(function(err) {

            })
    }
}
<<<<<<< HEAD

export const userCreatedType = 'USER_CREATED';
export const userCreationError = 'USER_CREATION_ERROR'

export const setUserNameType = 'SET_USER_NAME';
export const userCreationError = 'USER_CREATION_ERROR';

export function create;

export const createUserType = 'CREATE_USER';

export function setUserName(name) {
    return {
        type: setUserNameType,
        payload: name
    }
}

export const setUserAgeType = 'SET_USER_AGE';

export function setUserAge(age) {
    return {
        type: setUserAgeType,
        payload: age
    }
}
=======
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb
