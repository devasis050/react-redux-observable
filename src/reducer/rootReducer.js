import userReducer from './userReducer';
import pingPongreducer from './pingPongReducer';
import { combineReducers } from 'redux';

export default combineReducers({userReducer, pingPong: pingPongreducer});


