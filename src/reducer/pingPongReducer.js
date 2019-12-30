import {PONG, PING} from './../action/actionTypes'

const pingPongReducer = (state={isPing:true}, action) => {
    // console.log('pingPongReducer action:', action);
    // console.log('pingPongReducer state:', state);
    if(action.type === PONG) {
        return {isPing:true};
    } else if(action.type === PING) {
        return {isPing:false};
    }
    return state;
}

export default pingPongReducer;