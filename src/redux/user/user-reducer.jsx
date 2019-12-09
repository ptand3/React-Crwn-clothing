//Each state has reducers:Functions that will update the state depending upon the type of action 
//being performed
import UserActionTypes from"./user-action-types";

const INITIAL_STATE = {
    currentUser: null
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes:
            return {
                ...state, //new updated state
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;