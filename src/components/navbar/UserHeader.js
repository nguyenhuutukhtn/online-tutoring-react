import React from 'react';
// reactstrap components
import { NavDropdown } from 'react-bootstrap';
import './navbar.css';

export default class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
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
                src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                alt="user pic"
              />
              <div style={{ display: 'inline' }} className="ml-3">
                Nguyễn Hữu Tú
              </div>
            </div>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </>
    );
  }
}
