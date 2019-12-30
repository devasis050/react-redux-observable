import {PING, PONG, LOAD_USER_ACTION, UPDATE_USER_STATE_ACTION} from './actionTypes'

const createLoadUserAction = () => ({type: LOAD_USER_ACTION});
const ctreatePingAction = () => ({type:PING});
const createPongAction = () => ({type:PONG});

const createUpdateUserAction = (payload) => {
    return {
        type: UPDATE_USER_STATE_ACTION,
        payload
    }
}
export {createLoadUserAction, ctreatePingAction, createPongAction, createUpdateUserAction};