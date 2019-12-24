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
import { Badge } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import './navbar.css';
import UserHeader from './UserHeader';
import history from '../../helpers/history';

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
      return (
        <Nav navbar>
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
        </Nav>
      );
    }
    userInfo = JSON.parse(userInfo);
    if (userInfo.role === 'tutor') {
      return (
        <Nav navbar>
          <NavItem className="nav-item">
            <NavLink to="/tutor-contract" tag={Link} className="nav-link">
              Quản lí hợp đồng học
            </NavLink>
          </NavItem>
        </Nav>
      );
    }
    return (
      <Nav navbar>
        <NavItem className="nav-item">
          <NavLink to="/student-contract" tag={Link} className="nav-link">
            Quản lí hợp đồng học
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink to="/list-tutor" tag={Link} className="nav-link">
            Tìm gia sư
          </NavLink>
        </NavItem>
      </Nav>
    );
  };

  renderUserHeader = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      return <UserHeader data={userInfo} />;
    }
    return null;
  };

  toggleNavbarCollapse = () => {
    const { navbarCollapse } = this.state;
    this.setState({
      navbarCollapse: !navbarCollapse
    });
    document.documentElement.classList.toggle('nav-open');
  };

  handleMailClick = () => {
    history.push('/chat');
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
          {localStorage.getItem('userInfo') ? (
            <Badge
              badgeContent=""
              color="secondary"
              variant="dot"
              className="pl-2"
              onClick={() => this.handleMailClick()}
            >
              <MailIcon style={{ color: '#1D4575' }} />
            </Badge>
          ) : null}
        </Container>
      </Navbar>
    );
  }
}

export default CommonNavbar;
