import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption
} from 'mdbreact';
import { Dropdown, DropdownButton, ButtonToolbar } from 'react-bootstrap';
import './register.css';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.action';
import CommonNavbar from '../navbar/CommonNavbar';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        password2: ''
      },
      matchedPassword: false,
      submitted: false,
      rendering: true
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
    if (name === 'password2' && user.password === event.target.value) {
      this.setState({ matchedPassword: true });
    }
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
    const { user } = this.state;
    if (user.name && user.email && user.password && user.password2) {
      this.props.register(user);
    }
  }
  componentDidMount() {
    this.setState({ rendering: false });
  }
  render() {
    const { user, submitted, matchedPassword, rendering } = this.state;
    const { loading } = this.props;
    if (rendering) {
      // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }
    return (
      <div>
        <CommonNavbar />
        <form
          className="needs-validation"
          className="main-page"
          onSubmit={this.submitHandler}
        >
          <MDBContainer center>
            <MDBRow>
              <MDBCol />
            </MDBRow>
            <MDBRow>
              <MDBCol className="d-flex justify-content-center">
                <MDBCard>
                  <MDBCardBody>
                    <div className="register-body">
                      <div className="icon-logo">
                        {/* <img src="https://res.cloudinary.com/dsqfchskj/image/upload/v1575451936/Tutor/Peddagogy_brand_icon_wkh5hk.png"></img> */}
                      </div>
                      <div className="text-center">
                        <h3 className="dark-grey-text mb-5 register-title">
                          <strong>Đăng Ký</strong>
                        </h3>
                      </div>

                      <MDBInput
                        label="Email"
                        group
                        type="email"
                        name="email"
                        validate
                        containerClass="mb-0 text-left"
                        icon="envelope"
                        onChange={this.onChangeHandler}
                      >
                        {submitted && !user.email ? (
                          <div className="invalid-tooltip d-block">
                            Email không được bỏ trống
                          </div>
                        ) : null}
                      </MDBInput>
                      <MDBInput
                        label="Mật khẩu"
                        group
                        type="password"
                        name="password"
                        validate
                        containerClass="mb-0 text-left"
                        icon="lock"
                        onChange={this.onChangeHandler}
                      >
                        {submitted && !user.password ? (
                          <div className="invalid-tooltip d-block">
                            Mật khẩu không được bỏ trống
                          </div>
                        ) : null}
                      </MDBInput>
                      <MDBInput
                        label="Xác nhận mật khẩu"
                        group
                        type="password"
                        validate
                        name="password2"
                        containerClass="mb-0 text-left"
                        icon="exclamation-triangle"
                        onChange={this.onChangeHandler}
                      >
                        {submitted && !matchedPassword ? (
                          <div className="invalid-tooltip d-block">
                            Mật khẩu nhập lại không đúng
                          </div>
                        ) : null}
                      </MDBInput>

                      <MDBInput
                        label="Tên Người Dùng"
                        group
                        type="text"
                        validate
                        containerClass="text-left"
                        name="name"
                        error="wrong"
                        success="right"
                        icon="user"
                        onChange={this.onChangeHandler}
                      >
                        {submitted && !user.name ? (
                          <div className="invalid-tooltip d-block">
                            Tên người dùng không được bỏ trống
                          </div>
                        ) : null}

                        <div className="valid-feedback">Looks good!</div>
                      </MDBInput>

                      <select
                        className="custom-select mb-5"
                        name="role"
                        onChange={this.onChangeHandler}
                      >
                        <option selected>Chọn loại tài khoản</option>
                        <option value="student">Học sinh</option>
                        <option value="tutor">Gia sư</option>
                      </select>

                      <div className="text-center mb-3 mt-3">
                        <MDBBtn
                          type="submit"
                          gradient="blue"
                          rounded
                          className="btn-block z-depth-1a"
                        >
                          Đăng ký
                          {loading ? (
                            <div
                              className="spinner-border spinner-border-sm fast"
                              role="status"
                            />
                          ) : null}
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCardBody>
                  <MDBModalFooter className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">
                      Đã có tài khoản?
                      <a href="/login" className="blue-text ml-1">
                        Đăng nhập
                      </a>
                    </p>
                  </MDBModalFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </div>
    );
  }
}

function mapState(state) {
  const { loading } = state.registration;
  return { loading };
}

const actionCreators = {
  register: userActions.register
};

const connectedRegisterPage = connect(
  mapState,
  actionCreators
)(Register);

export default connectedRegisterPage;
