import React from 'react';
import { connect } from 'react-redux';
// reactstrap components
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import './navbar.css';
import userActions from '../../actions/user.action';
import history from '../../helpers/history';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: null
    };
  }

  componentDidMount() {
    const { data } = this.props;
    const userInfo = JSON.parse(data);
    const { getProfile } = this.props;
    getProfile(userInfo.userId, res => {
      console.log('---------info', res.data);
      this.setState({
        userDetail: res.data
      });
    });
  }

  logOut = () => {
    localStorage.clear();
    history.push('/');
    window.location.reload();
  };

  render() {
    const { userDetail } = this.state;
    return (
      <>
        <NavDropdown
          className="float-right"
          title={
            <div
              className="pull-left dropdown-title"
              style={{ display: 'inline' }}
            >
              <img
                className="thumbnail-image rounded-circle"
                src={userDetail ? userDetail.avatar : null}
                alt="user pic"
              />
              <div style={{ display: 'inline' }} className="ml-3">
                {userDetail ? userDetail.name : null}
              </div>
              <div
                style={{ display: 'inline', color: '#CC0000' }}
                className="ml-3"
              >
                {userDetail ? userDetail.balance : 0}K VNĐ
              </div>
            </div>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item>
            <NavLink to="/profile" tag={Link}>
              Thông tin cá nhân
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/student-contract" tag={Link}>
              Lịch sử thuê
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/change-password" tag={Link}>
              Đổi mật khẩu
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <NavLink tag={Link} onClick={this.logOut}>
              Đăng xuất
            </NavLink>
          </NavDropdown.Item>
        </NavDropdown>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfile: (id, cb) => dispatch(userActions.requestProfile(id, cb))
});

export default connect(
  null,
  mapDispatchToProps
)(UserHeader);
