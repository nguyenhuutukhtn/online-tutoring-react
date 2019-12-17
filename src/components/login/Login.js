import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from 'mdbreact';
import { connect } from 'react-redux';
import './login.css';
import userActions from '../../actions/user.action';
import history from '../../helpers/history';
import Facebook from './Facebook';
import Google from './Google';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      email: '',
      password: '',
      submitted: false,
      loading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: false });
    this.checkLogin();
  }

  checkLogin = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      history.push('/');
      window.location.reload();
    }
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { login } = this.props;

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      login(email, password);
    }
  }

  render() {
    const { submitted, email, password, loading } = this.state;
    const { loggingIn } = this.props;

    if (loading) {
      // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }
    return (
      <>
        <div className="page-header">
          <div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol className="d-flex justify-content-center">
                      <MDBCard>
                        <MDBCardBody className="card-none-shadow mt-0">
                          {' '}
                          <div className="login-con ">
                            <div className="icon-user" />
                            <div className="text-center title">
                              <h3 className="dark-grey-text">
                                <strong>Đăng nhập</strong>
                              </h3>
                            </div>
                          </div>
                        </MDBCardBody>
                        <MDBCardBody className="mt-0">
                          <MDBInput
                            label="Email"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            name="email"
                            onChange={this.handleChange}
                          >
                            {submitted && !email ? (
                              <div className="invalid-tooltip d-block">
                                Tên đăng nhập không được bỏ trống
                              </div>
                            ) : null}
                          </MDBInput>
                          <MDBInput
                            label="Mật khẩu"
                            group
                            type="password"
                            validate
                            containerClass="mb-0"
                            name="password"
                            onChange={this.handleChange}
                          >
                            {submitted && !password ? (
                              <div className="invalid-tooltip d-block">
                                Mật khẩu không được bỏ trống
                              </div>
                            ) : null}
                          </MDBInput>
                          <p className="font-small blue-text d-flex justify-content-end pb-3">
                            <a href="#!" className="blue-text ml-1">
                              Quên Mật khẩu?
                            </a>
                          </p>
                          <div className="text-center mb-3">
                            <MDBBtn
                              type="submit"
                              gradient="blue"
                              rounded
                              className="btn-block z-depth-1a"
                            >
                              Đăng nhập
                              {loggingIn ? (
                                <div
                                  className="spinner-border spinner-border-sm fast"
                                  role="status"
                                />
                              ) : null}
                            </MDBBtn>
                          </div>
                          <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                            Hoặc đăng nhập với:
                          </p>
                          <div className="row my-3 d-flex justify-content-center">
                            <Facebook />
                            <Google />
                          </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                          <p className="font-small grey-text d-flex justify-content-end">
                            Bạn chưa có tài khoản?
                            <a href="/register" className="blue-text ml-1">
                              Tạo tài khoản
                            </a>
                          </p>
                        </MDBModalFooter>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login
  // logout: userActions.logout
};

const connectedLoginPage = connect(
  mapState,
  actionCreators
)(Login);

export default connectedLoginPage;
