import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import './tutor.css';
import TutorHistory from './TutorHistory';
import TutorInfo from './TutorInfo';
import ListTutorSkill from './ListTutorSkill';
import TutorReview from './TutorReview';
import { requestTutorDetail } from '../../actions/tutor.action';

class TutorDetail extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const id = location.search.split('=')[1];
    this.state = {
      tutorId: id,
      tutorData: null
    };
  }

  componentDidMount = () => {
    const { tutorId } = this.state;
    const { getTutorDetail } = this.props;
    getTutorDetail(tutorId, res => {
      this.setState({
        tutorData: res
      });
    });
  };

  render() {
    const { tutorData } = this.state;
    return (
      <Container>
        <Row className="main-row ">
          <Col md="4" className="noPadding">
            <div className="h-100">
              <Container className="noPadding noMargin tutor-info-container">
                <Row className=" noPadding noMargin ">
                  <Col className=" noPadding noMargin ">
                    <div>
                      <TutorInfo
                        tutorData={tutorData ? tutorData.info : null}
                        introduce={tutorData ? tutorData.introduce[0] : null}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>

          <Col md="4" className="noPadding noMargin">
            <TutorHistory
              listOldStudent={tutorData ? tutorData.listOldStudent : null}
              className="history-item"
            />
          </Col>
          <Col md="4" className="noPadding noMargin">
            <ListTutorSkill tutorSkill={tutorData ? tutorData.skill : null} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="noPadding noMargin" md="12">
            <TutorReview
              listRateAndComment={tutorData ? tutorData.rateAndComment : null}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTutorDetail: (id, cb) => dispatch(requestTutorDetail(id, cb))
});

export default connect(
  null,
  mapDispatchToProps
)(TutorDetail);
