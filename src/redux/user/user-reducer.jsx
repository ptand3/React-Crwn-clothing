//Each state has reducers:Functions that will update the state depending upon the type of action 
//being performed
const INITIAL_STATE = {
    currentUser: null
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state, //new updated state
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;