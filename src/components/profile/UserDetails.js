import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { connect } from 'react-redux';
import userActions from '../../actions/user.action';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: {
        id: '1',
        name: 'Nguyễn Hữu Tú',
        avatar: 'https://placeimg.com/640/480/any',
        metaTitle: 'Giới thiệu',
        metaValue: ''
      },
      chosen: false,
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

  componentDidMount = () => {
    const { userDetail: userInfo, introduce } = this.props;
    const { userDetails } = this.state;
    if (userInfo) {
      this.setState({
        userDetails: {
          ...userDetails,
          avatar: userInfo.avatar,
          name: userInfo.name,
          id: userInfo.userId,
          metaValue: introduce ? introduce.content : ''
        }
      });
    }
  };

  showWidget = () => {
    const { widget } = this.state;
    widget.open();
  };

  checkUploadResult = resultEvent => {
    const { userDetails } = this.state;
    if (resultEvent.event === 'success') {
      this.setState({
        userDetails: {
          ...userDetails,
          avatar: resultEvent.info.secure_url
        },
        chosen: true
      });
    }
  };

  uploadAvatar = () => {
    const { userDetails } = this.state;
    const { updateAvatar } = this.props;
    const { id, avatar } = userDetails;
    updateAvatar(id, avatar);
  };

  render() {
    const { userDetails, chosen } = this.state;
    const { userDetail } = this.props;
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
          <br />
          {!chosen ? (
            <Button
              variant="contained"
              color="default"
              // className={classes.button}
              onClick={this.showWidget}
            >
              Choose Image
            </Button>
          ) : null}

          {chosen ? (
            <Button
              variant="contained"
              color="default"
              // className={classes.button}
              startIcon={<CloudUploadIcon />}
              onClick={this.uploadAvatar}
            >
              Cập nhật
            </Button>
          ) : null}

          {/* <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button> */}
        </Card.Header>
        {userDetail.role === 'tutor' ? (
          <ListGroup flush>
            <ListGroupItem className="p-4">
              <strong className="text-muted d-block mb-2">
                {userDetails.metaTitle}
              </strong>
              <span>{userDetails.metaValue}</span>
            </ListGroupItem>
          </ListGroup>
        ) : null}
      </Card>
    );
  }
}

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
