import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Button, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.action';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: {
        id: '1',
        name: 'Nguyễn Hữu Tú',
        avatar: 'https://placeimg.com/640/480/any',
        jobTitle: 'Gia sư cấp 3',
        metaTitle: 'Giới thiệu',
        metaValue: 'Gia sư này giỏi vkl'
      },
      widget: window.cloudinary.createUploadWidget(
        {
          cloudName: 'dsqfchskj',
          uploadPreset: 'nt4f7ylt'
        },
        (error, result) => {
          this.checkUploadResult(result);
        }
      )
    };

    this.showWidget = this.showWidget.bind(this);
  }

  showWidget = () => {
    console.log('clicked');
    const { widget } = this.state;
    widget.open();
  };

  checkUploadResult = resultEvent => {
    if (resultEvent.event === 'success') {
      this.setState({
        userDetails: {
          ...this.state.userDetails,
          avatar: resultEvent.info.secure_url
        }
      });
    }
  };

  uploadAvatar = () => {
    const { id, avatar } = this.state.userDetails;
    this.props.updateAvatar(id, avatar);
  };
  render() {
    const { userDetails } = this.state;
    return (
      <Card small className="mt-5">
        <Card.Header className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={userDetails.avatar}
              alt={userDetails.name}
              width="110"
              height="110"
            />
          </div>
          <h4 className="mb-0">{userDetails.name}</h4>
          <span className="text-muted d-block mb-2">
            {userDetails.jobTitle}
          </span>
          <Button
            variant="contained"
            color="default"
            // className={classes.button}
            onClick={this.showWidget}
          >
            Choose Image
          </Button>
          <br></br>
          <Button
            className="mt-3"
            variant="contained"
            color="default"
            // className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={this.uploadAvatar}
          >
            Upload
          </Button>
          {/* <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button> */}
        </Card.Header>
        <ListGroup flush>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
              {userDetails.metaTitle}
            </strong>
            <span>{userDetails.metaValue}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

const actionCreators = {
  updateAvatar: userActions.updateAvatar
};
function mapState(state) {
  const { loggingIn } = state.login;
  return { loggingIn };
}
const connectedUserDetailPage = connect(
  mapState,
  actionCreators
)(UserDetails);

export default connectedUserDetailPage;
