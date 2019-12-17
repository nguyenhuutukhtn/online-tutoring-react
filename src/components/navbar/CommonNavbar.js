import React from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates strings
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from 'classnames';

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';
import UserHeader from './UserHeader';
import './navbar.css';

// reactstrap components

class CommonNavbar extends React.Component {

  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      navbarCollapse: false
    };
  }

  renderNav = () => {
    let userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      return (<Nav navbar>
        <NavItem className="nav-item">
          <NavLink to="/list-tutor" tag={Link} className="nav-link">
            Tìm gia sư
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink to="/register" tag={Link} className="nav-link">
            Đăng ký gia sư
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login" tag={Link} className="nav-link">
            Đăng nhập
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/register" tag={Link} className="nav-link">
            Đăng ký
          </NavLink>
        </NavItem>
      </Nav>)
    }
    userInfo = JSON.parse(userInfo);
    if (userInfo.role === "tutor") {
      return null;
    }
    return (<Nav navbar>
      <NavItem className="nav-item">
        <NavLink to="/list-tutor" tag={Link} className="nav-link">
          Tìm gia sư
        </NavLink>
      </NavItem>
    </Nav>);
  };

  renderUserHeader = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      return (
        <UserHeader data={userInfo} />
      )
    }
    return null;
  }

  toggleNavbarCollapse = () => {
    const { navbarCollapse } = this.state;
    this.setState({
      navbarCollapse: !navbarCollapse
    })
    document.documentElement.classList.toggle('nav-open');
  };

  render() {
    const { navbarCollapse } = this.state;

    return (
      <Navbar className="navbar" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/index"

              title="Coded by Creative Tim"
              tag={Link}
            >
              <img
                width="100"
                //   height="60"
                className="d-inline-block align-top"
                alt="logo"
                src="http://smartertutoring.com/wp-content/uploads/2016/08/20160816-Smarter-tutoring-logo-for-WordPress-banner_navy-blue-01-2.png"
              />
            </NavbarBrand>
            <button
              type="button"
              aria-expanded={navbarCollapse}
              className={classnames('navbar-toggler navbar-toggler', {
                toggled: navbarCollapse
              })}
              onClick={this.toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            {this.renderNav()}
          </Collapse>
          {this.renderUserHeader()}
        </Container>
      </Navbar>
    );
  }
}

export default CommonNavbar;
