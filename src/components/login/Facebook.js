import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import { userActions } from '../../actions/user.action';


class Facebook extends Component {

    componentClicked = () => {
        console.log('clicked!!!');
    }

    responseFacebook = (response) => {
        this.props.loginFB(response.name, response.id);
    }

    render() {
        return (
            <div>
                <FacebookLogin
                    appId="2532109033583693"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            </div>
        )
    }
}

const actionCreators = {
    loginFB: userActions.loginFB
    // logout: userActions.logout
};


const connectedFBPage = connect(
    null,
    actionCreators
)(Facebook);

export default connectedFBPage;
