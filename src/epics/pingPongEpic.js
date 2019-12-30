import { ofType } from "redux-observable";
import {PING} from './../action/actionTypes';
import {createPongAction} from './../action'
import {map, mapTo, delay} from 'rxjs/operators';

const pingPongEpic = (action$, state$) => {
    // console.log('Logging state$ in ping pong epic');
    // const stateSubscription = state$.subscribe(state => console.log('next state in ping pong epic:', state));
    // console.log('Logging action$ in ping pong epi');
    // action$.subscribe(action=> console.log('action next in ping pong epic', action));
    return action$.pipe(map(action=> {
        console.log('action in ping pong epic:', action);
        return action;
        }), 
        ofType(PING),
        delay(2000), 
        mapTo(createPongAction())
    ) 
}

export default pingPongEpic;