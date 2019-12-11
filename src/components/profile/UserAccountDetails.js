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
  Radio,
  FormLabel,
  Checkbox
} from '@material-ui/core';
import './profile.css';

// import { KeyboardDatePicker } from '@material-ui/pickers';

class UserAccountDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <TextField
                        id="date"
                        label="Ngày sinh"
                        type="date"
                        defaultValue="2017-05-24"
                        // className={classes.textField}
                        className="float-left"
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="6">
                      <div className="float-left text-left">
                        <FormLabel
                          component="legend"
                          className="float-left text-left"
                        >
                          Giới tính
                        </FormLabel>
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Nam"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Nữ"
                        />
                      </div>
                    </Col>
                    <Col md="6" className="form-group">
                      <TextField
                        id="email"
                        label="Email"
                        className="float-left"
                        type="email"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md="6" className="form-group">
                      <TextField
                        id="phone"
                        label="Số điện thoại"
                        className="float-left"
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <TextField
                        id="university"
                        label="Trường"
                        className="float-left"
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
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Col md="12">
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Tự giới thiệu"
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
                        label="Học phí/giờ"
                        className="float-left"
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
}

export default UserAccountDetails;
