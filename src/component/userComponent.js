import React, { Component } from "react";
import { connect } from "react-redux";
import {createLoadUserAction} from './../action'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUserButton: true
        }

    }

    onClickShowUser() {
        this.setState({showUserButton:false});
        this.props.actions.loadUsers();
    }

    render() {
        const {showUserButton} = this.state;
        const {users} = this.props.state;
        return (
            <div>
                {showUserButton || !users  ? 
                    <button onClick={() => this.onClickShowUser()}>ShowUser</button> : 
                    <ul>
                        {users.map( user=><li key={user}>{user}</li>)}
                    </ul>
                }
            </div>
        );
    }
}

function mapDispatchToProps(storeDispatch) {
    return {
        actions : {
            loadUsers : () => {
                storeDispatch(createLoadUserAction())
            }

        }
    }
}

function mapStatetoProps(storeState) {
    // console.log('mapStateToProps:', storeState); // storeState is entire store. 
    return {
        state : {
            users : storeState.userReducer.users
        }
    };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Users);