
import pingPongEpic from './pingPongEpic';
import userEpic from './userEpic';
import { combineEpics } from 'redux-observable';

export default combineEpics(pingPongEpic, userEpic);

