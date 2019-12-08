import React from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates strings
import classnames from 'classnames';
import './navbar.css';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';

function CommonNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-blue');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <Navbar className="fixed-top navbar" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
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
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
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
          <Nav navbar>
            <NavItem className="nav-item">
              <NavLink to="/index" tag={Link} className="nav-link">
                Tìm gia sư
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink href="" target="_blank">
                Đăng ký gia sư
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" target="_blank">
                Đăng yêu cầu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" target="_blank">
                Đăng nhập
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" target="_blank">
                Đăng ký
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default CommonNavbar;