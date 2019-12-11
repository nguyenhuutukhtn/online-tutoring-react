import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { connect } from 'react-redux';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { userActions } from '../../actions/user.action';

class Facebook extends Component {
  componentClicked = () => {
    console.log('clicked!!!');
  };

  responseFacebook = response => {
    this.props.loginFB(response.name, response.id);
  };

  render() {
    return (
      <div>
        <FacebookLogin
          appId="2532109033583693"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          render={renderProps => (
            <MDBBtn
              onClick={renderProps.onClick}
              type="button"
              color="white"
              rounded
              className="mr-md-3 z-depth-1a"
            >
              <MDBIcon
                fab
                icon="facebook-f"
                className="blue-text text-center"
              />
            </MDBBtn>
          )}
        />
      </div>
    );
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
