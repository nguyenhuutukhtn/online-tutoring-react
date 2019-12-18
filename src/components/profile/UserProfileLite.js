import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './profile.css';
import PageTitle from '../page-title/PageTitle';
import UserDetails from './UserDetails';
import UserAccountDetails from './UserAccountDetails';
import {
  requestTutorIntroduce,
  requestTutorSkills,
  requestListSkill
} from '../../actions/tutor.action';
import userActions from '../../actions/user.action';

class UserProfileLite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: null,
      introduce: null,
      listTutorSkill: null,
      listAllSkill: null
    };
  }

  componentDidMount = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const {
      getIntroduce,
      getTutorSkills,
      getProfile,
      getAllSkill
    } = this.props;
    if (userInfo) {
      getIntroduce(userInfo.userId, res => {
        this.setState({
          introduce: res.data
        });
      });

      getTutorSkills(userInfo.userId, res => {
        this.setState({
          listTutorSkill: res.data
        });
      });

      getProfile(userInfo.userId, res => {
        this.setState({
          userDetail: res.data
        });
      });

      getAllSkill(res => {
        this.setState({
          listAllSkill: res.data
        });
      });
    }
  };

  render() {
    const { userDetail, listTutorSkill, introduce, listAllSkill } = this.state;

    // console.log('userDetail: ----', userDetail);
    // console.log('listTutorSkill: ----', listTutorSkill);
    // console.log('introduce: ----', introduce);
    // console.log('listAllSkill: ----', listAllSkill);
    if (userDetail && listTutorSkill && listAllSkill) {
      return (
        <div className="mx-auto profile-page">
          <Container
            className="main-content-container main-profile"
            expand="lg"
          >
            <Row className="page-header">
              <PageTitle
                title="Tài khoản"
                subtitle="Gia sư"
                md="12"
                className="ml-sm-auto mr-sm-auto page-title"
              />
            </Row>
            <Row className="">
              <Col lg="4">
                <UserDetails userDetail={userDetail} introduce={introduce} />
              </Col>
              <Col lg="8">
                <UserAccountDetails
                  userDetail={userDetail}
                  listTutorSkill={listTutorSkill}
                  introduce={introduce}
                  listAllSkill={listAllSkill}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  getIntroduce: (id, cb) => dispatch(requestTutorIntroduce(id, cb)),
  getTutorSkills: (id, cb) => dispatch(requestTutorSkills(id, cb)),
  getProfile: (id, cb) => dispatch(userActions.requestProfile(id, cb)),
  getAllSkill: cb => dispatch(requestListSkill(cb))
});

export default connect(
  null,
  mapDispatchToProps
)(UserProfileLite);
