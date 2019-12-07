import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.action';
import { MDBBtn, MDBIcon } from 'mdbreact';

class Google extends Component {
  responseGoogle = res => {
    this.props.loginGG(res.w3.ig, res.w3.Eea);
  };

  responseGoogleFailed = res => {
    console.log('res---- failed', res);
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="78890923225-m9itd6153hn0o42l1c90b0v8komcjn0e.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogleFailed}
          cookiePolicy="single_host_origin"
          render={renderProps => (
            <MDBBtn
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              type="button"
              color="white"
              rounded
              className="z-depth-1a"
            >
              <MDBIcon fab icon="google-plus-g" className="blue-text" />
            </MDBBtn>
          )}
        />
      </div>
    );
  }
}

const actionCreators = {
  loginGG: userActions.loginGG
  // logout: userActions.logout
};

const connectedGGPage = connect(
  null,
  actionCreators
)(Google);

export default connectedGGPage;
