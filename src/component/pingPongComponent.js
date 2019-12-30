import React, { Component } from "react";
import { connect } from "react-redux";
import {createPongAction, ctreatePingAction} from './../action'

class PingPong extends Component {
    constructor(props) {
        super(props);
        this.pingClicckHandler = this.pingClickHandler.bind(this);
    }

    pingClickHandler() {
        const isPing = this.props.state.isPing;
        
        this.props.action.pingAction(isPing);
    }

    render() {
        const {isPing} = this.props.state;
        return (
            <div>
                <button onClick={() => this.pingClickHandler()}>{isPing ? 'PING': 'PONG'}</button>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return { state: store.pingPong};
}

function mapDispatchToProps(dispatch) {
    return {
            action : {
                pingAction : (isPing) => {
                    let action = isPing ? ctreatePingAction() : createPongAction(); 
                    dispatch(action);
                }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PingPong);