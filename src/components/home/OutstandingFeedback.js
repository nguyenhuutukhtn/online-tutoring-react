import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import './Benifit.css';
import FeedBackItem from './FeedBackItem';

class OutstandingFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  render() {
    const listFeedBack = [
      {
        name: 'Nguyễn Hữu Tú',
        avatar:
          'https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg',
        description: 'Học sinh - 1200 giờ học',
        content:
          'Tôi rất may mắn khi biết đến eTeacher và đã được giới thiệu gia sư Diệu cho con mình. Nhờ có cô giáo mà cháu từ việc học yếu môn Toán đã không phải lo lắng ở lại lớp mà còn đạt được học sinh khá. Cảm ơn eTeacher rất nhiều.'
      },
      {
        name: 'Ngô Đức Kha',
        avatar:
          'https://res.cloudinary.com/dsqfchskj/image/upload/v1576326329/Tutor/76693265_1202441073285229_171197740015943680_o_kvshia.jpg',
        description: 'Gia sư - 1121 giờ dạy',
        content:
          'Tôi rất may mắn khi biết đến eTeacher và đã được giới thiệu gia sư Diệu cho con mình. Nhờ có cô giáo mà cháu từ việc học yếu môn Toán đã không phải lo lắng ở lại lớp mà còn đạt được học sinh khá. Cảm ơn eTeacher rất nhiều.'
      },
      {
        name: 'Nguyễn Ngô Tín',
        avatar:
          'https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/36304048_1026569650827217_7308953294523596800_o_ihegp9.jpg',
        description: 'Phụ huynh',
        content:
          'Gia sư Tây rất nhiệt huyết và tận tình. Anh biết gia sư cũng cực lắm khi dạy 2 con anh, dạo gần đây 2 bé ngoan hơn, học tập tiến bộ hơn rất nhiều, gia sư còn dành cả tuần để dạy cho 2 bé khi biết 2 bé sắp thi. Anh rất cảm ơn công ty.'
      }
    ];
    return (
      <div className="noMargin noPadding border list-feedback">
        <div className="benifit-title">
          <h1 className="benifit-title">Đánh giá từ người dùng</h1>
        </div>
        <Container className="mt-0 pb-5 mt-4" expand="lg">
          <Row className="noPadding noMargin mt-0">
            <Col lg="4">
              <FeedBackItem data={listFeedBack[0]} />
            </Col>
            <Col lg="4">
              <FeedBackItem data={listFeedBack[1]} />
            </Col>
            <Col lg="4">
              <FeedBackItem data={listFeedBack[2]} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OutstandingFeedback;
