import React from 'react';
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import {
  FormControl,
  TextField,
  FormControlLabel,
  FormLabel,
  Checkbox
} from '@material-ui/core';
import './profile.css';

// import { KeyboardDatePicker } from '@material-ui/pickers';

// eslint-disable-next-line react/prefer-stateless-function
class UserAccountDetails extends React.Component {


  render() {
    const { userDetail, listTutorSkill, introduce, listAllSkill } = this.props;
    console.log('-------listTutorSkill', listTutorSkill);
    console.log('-------introduce', introduce);
    console.log('-------userDetail', userDetail);
    console.log('-------listAllSkill', listAllSkill);

    if (userDetail && listTutorSkill.length && introduce) {
      if (userDetail.role === "tutor") {
        return (
          <Card small className="mb-4 mt-5">
            <Card.Header className="border-bottom card-header-title">
              <h6 className="m-0" color="white">
                Cập nhật thông tin
              </h6>
            </Card.Header>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        <Col md="6" className="form-group">
                          <TextField
                            id="name"
                            label="Họ tên"
                            className="float-left"
                            defaultValue={userDetail.name}
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col md="12">
                          <TextField
                            fullWidth
                            id="address"
                            label="Địa chỉ"
                            className="float-left"
                            defaultValue={userDetail.address}
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col md="12">
                          <TextField
                            id="outlined-multiline-flexible"
                            label="Tự giới thiệu"
                            defaultValue={introduce.content}
                            fullWidth
                            multiline
                            rows="4"
                            variant="outlined"
                          />
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
            <Card.Header className="border-bottom">
              <h6 className="m-0">Thông tin giảng dạy</h6>
            </Card.Header>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row form>
                        <Col md="6" className="form-group">
                          <TextField
                            id="fee"
                            label="Học phí (x1000 VND/ giờ)"
                            className="float-left"
                            defaultValue={userDetail.pricePerHour}
                            variant="outlined"
                            required
                          />
                        </Col>
                      </Row>
                      <Row form>
                        <Col md="12">
                          <FormControl className="float-left text-left">
                            <FormLabel
                              component="legend"
                              className="float-left text-left"
                              fullWidth
                            >
                              Chọn kĩ năng
                            </FormLabel>

                            <FormControlLabel
                              control={<Checkbox color="primary" />}
                              label="Luyện thi đại học khối A"
                            />
                            <FormControlLabel
                              control={<Checkbox color="primary" />}
                              label="Huấn luyện người ngu hết thuốc chữa"
                            />
                          </FormControl>
                        </Col>
                      </Row>

                      <Button theme="accent">Cập nhật</Button>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        );
      }
      return null;
    }
    return null;
  }
}

export default UserAccountDetails;

