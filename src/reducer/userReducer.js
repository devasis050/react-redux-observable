
import {UPDATE_USER_STATE_ACTION} from './../action/actionTypes'

const userReducer = (state={}, action) => {
    if(action.type === UPDATE_USER_STATE_ACTION) {
        console.log('update user action:', action);
        return {users:action.payload};
    }
    return state;
}

export default userReducer;