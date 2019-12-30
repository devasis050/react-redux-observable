import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/rootReducer';
import User from './component/userComponent';
import rootEpic from './epics/rootEpic';
import { createEpicMiddleware } from 'redux-observable';
import PingPong from './component/pingPongComponent'


const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic); //This should be after createStore()

const App = () => {
    return (<div>
                <User/>
                <PingPong/>
            </div>);
} 

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
