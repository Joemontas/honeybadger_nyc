import axios from 'axios';

export const fetchUserType = 'FETCH_USER_FULFILLED';

export function fetchUser() {
    return function(dispatch) {
        dispatch({ type: 'FETCHING_USER'})

        axios.get(`/users/${id}`)
            .then(function(response) {

            })
            .catch(function(err) {

            })
    }
}

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
