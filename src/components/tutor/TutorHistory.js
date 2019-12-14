import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import './tutor.css';

export default class TutorHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container className="h-100">
        <Row className="h-100">
          <Col md="12" className="timeline">
            <div className="ml-sm-auto mr-sm-auto mt-4 history-title">
              Lịch sử dạy học
            </div>

            <VerticalTimeline animate={false} layout="1-column">
              <VerticalTimelineElement
                className="vertical-timeline-element--work "
                date="Kết thúc: 6/12/2019"
                contentStyle={{}}
                iconStyle={{
                  background: '#6782a3',
                  color: '#fff'
                }}
                icon={<CheckCircleIcon />}
              >
                <h6 className="vertical-timeline-element-title text-left">
                  Học sinh: Nguyễn Hữu Tú
                </h6>
                <h6 className="vertical-timeline-element-subtitle text-left">
                  Tổng thời gian: 80 giờ
                </h6>
                <p className="text-left">Giá: 69k/giờ</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Kết thúc: 6/12/2019"
                contentStyle={{}}
                iconStyle={{
                  background: '#6782a3',
                  color: '#fff'
                }}
                icon={<CheckCircleIcon />}
              >
                <h6 className="vertical-timeline-element-title text-left">
                  Học sinh: Nguyễn Hữu Tú
                </h6>
                <h6 className="vertical-timeline-element-subtitle text-left">
                  Tổng thời gian: 80 giờ
                </h6>
                <p className="text-left">Giá: 69k/giờ</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Kết thúc: 6/12/2019"
                contentStyle={{}}
                iconStyle={{
                  background: '#6782a3',
                  color: '#fff'
                }}
                icon={<CheckCircleIcon />}
              >
                <h6 className="vertical-timeline-element-title text-left">
                  Học sinh: Nguyễn Hữu Tú
                </h6>
                <h6 className="vertical-timeline-element-subtitle text-left">
                  Tổng thời gian: 80 giờ
                </h6>
                <p className="text-left">Giá: 69k/giờ</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    );
  }
}
