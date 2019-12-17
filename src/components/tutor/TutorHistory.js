import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import './tutor.css';
import TutorHistorySkeleton from '../skeleton/TutorHistorySkeleton';

export default class TutorHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderListOldStudent = () => {
    const { listOldStudent } = this.props;
    let listOldStudentElement = [];
    if (listOldStudent) {
      listOldStudentElement = listOldStudent.map(student => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date={
              student.complete_date
                ? `Kết thúc: ${moment(student.complete_date).format(
                    'DD-MM-YYYY HH:mm'
                  )}`
                : 'Kết thúc: '
            }
            contentStyle={{}}
            iconStyle={{
              background: '#6782a3',
              color: '#fff'
            }}
            icon={<CheckCircleIcon />}
          >
            <h6 className="vertical-timeline-element-title text-left">
              Học sinh: {student.name}
            </h6>
            <h6 className="vertical-timeline-element-subtitle text-left">
              Thời gian thuê: {student.hours_hire} giờ
            </h6>
            <p className="text-left">
              Giá: {student.price / student.hours_hire}K VNĐ/giờ
            </p>
          </VerticalTimelineElement>
        );
      });
    }
    return listOldStudentElement;
  };

  render() {
    const { listOldStudent } = this.props;
    return (
      <Container className="h-100">
        <Row className="h-100">
          <Col md="12" className="timeline">
            <div className="ml-sm-auto mr-sm-auto mt-4 history-title">
              Lịch sử dạy học
            </div>

            <VerticalTimeline animate={false} layout="1-column">
              {listOldStudent ? null : <TutorHistorySkeleton />}
              {this.renderListOldStudent()}
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    );
  }
}
