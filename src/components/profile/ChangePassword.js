import React from 'react';
import { connect } from 'react-redux';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from 'mdbreact';
import './profile.css';
import userActions from '../../actions/user.action';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
      newPassword2: '',
      matchedPassword: false,
      submitted: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    const { newPassword } = this.state;
    this.setState({
      [name]: value
    });
    if (name === 'newPassword2' && newPassword === event.target.value) {
      this.setState({ matchedPassword: true });
    } else {
      this.setState({ matchedPassword: false });
    }
  }

  submitHandler(event) {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    const { oldPassword, newPassword, newPassword2 } = this.state;
    const { changePassword } = this.props;
    this.setState({
      submitted: true
    });
    if (newPassword === newPassword2) {
      changePassword(token, oldPassword, newPassword, newPassword2);
    }
  }

  render() {
    const { oldPassword, newPassword, submitted, matchedPassword } = this.state;

    return (
      <div className="mt-4 pb-4">
        <form
          className="needs-validation main-page"
          onSubmit={this.submitHandler}
        >
          <MDBContainer center className="mt-4 pb-4">
            <MDBRow>
              <MDBCol className="d-flex justify-content-center">
                <MDBCard>
                  <MDBCardBody>
                    <div className="change-pass-body">
                      <div className="text-center">
                        <h3 className="dark-grey-text mb-5">
                          <strong>Đổi mật khẩu</strong>
                        </h3>
                      </div>

                      <MDBInput
                        label="Mật khẩu hiện tại"
                        group
                        type="password"
                        name="oldPassword"
                        validate
                        containerClass="mb-0 text-left"
                        onChange={this.onChangeHandler}
                      >
                        {submitted && !oldPassword ? (
                          <div className="invalid-tooltip d-block">
                            Không được bỏ trống
                          </div>
                        ) : null}
                      </MDBInput>
                      <MDBInput
                        label="Mật khẩu mới"
                        group
                        type="password"
                        name="newPassword"
                        validate
                        containerClass="mb-0 text-left"
                        onChange={this.onChangeHandler}
                      >
                        {submitted && !newPassword ? (
                          <div className="invalid-tooltip d-block">
                            Không được bỏ trống ô này
                          </div>
                        ) : null}
                      </MDBInput>
                      <MDBInput
                        label="Xác nhận mật khẩu mới"
                        group
                        type="password"
                        validate
                        name="newPassword2"
                        containerClass="mb-0 text-left"
                        onChange={this.onChangeHandler}
                      >
                        {submitted && !matchedPassword ? (
                          <div className="invalid-tooltip d-block">
                            Mật khẩu nhập lại không đúng
                          </div>
                        ) : null}
                      </MDBInput>

                      <div className="text-center mb-3 mt-3">
                        <MDBBtn
                          type="submit"
                          gradient="blue"
                          rounded
                          className="btn-block z-depth-1a"
                          style={{ borderRadius: 23 }}
                        >
                          Cập nhật
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  changePassword: userActions.changePassword
};

export default connect(
  null,
  mapDispatchToProps
)(ChangePassword);
