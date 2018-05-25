<<<<<<< HEAD
import { 
    fetchUserType, 
    setUserAgeType, 
    setUserNameType 
=======
import {
    fetchUserType,
    userCreatedType,
    userCreationError
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb
} from '../actions/user-actions';

const initialState = {
    user: {
        id: null,
<<<<<<< HEAD
        age: null
=======
        email: null
>>>>>>> 0848b8195237e9c77802fd421a98b8060feb1fbb
    },
    fetching: false,
    fetched: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case fetchUserType:
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        case userCreatedType:
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        default:
            return state;
    }
}
