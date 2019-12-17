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
  constructor(props) {
    super(props);
    this.state = {
      listAllSkill: [{}],
      listChosenSkill: [{}],
      name: '',
      address: '',
      introduce: '',
      pricePerHour: ''
    };
    this.handleCheckBoxOnChange = this.handleCheckBoxOnChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const { listAllSkill, listTutorSkill, userDetail, introduce } = this.props;
    this.setState(
      {
        name: userDetail.name,
        address: userDetail.address,
        introduce: introduce.content,
        pricePerHour: userDetail.pricePerHour,
        listAllSkill: listAllSkill.map(itemInAllSkill => {
          var isChosen = false;
          listTutorSkill.map(itemInTutorSkill => {
            if (itemInAllSkill.id === itemInTutorSkill.id_tag) isChosen = true;
          });

          return {
            id: itemInAllSkill.id,
            name: itemInAllSkill.name,
            isChecked: isChosen
          };
        })
      },
      () => this.updateListChosenSkill()
    );
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  updateListChosenSkill = () => {
    const { listAllSkill, listChosenSkill } = this.state;
    this.setState({
      listChosenSkill: listAllSkill.filter(item => item.isChecked == true)
    });
  };

  renderAllSkill = () => {
    const { listAllSkill } = this.state;
    const listAllSkillElement = listAllSkill.map((skill, idx) => {
      return (
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={skill.name}
          value={skill.id}
          checked={skill.isChecked}
          onChange={this.handleCheckBoxOnChange}
        />
      );

      return null;
    });
    return listAllSkillElement;
  };

  handleCheckBoxOnChange(e) {
    const { listAllSkill } = this.state;

    listAllSkill.forEach(skill => {
      if (skill.id == e.target.value) {
        skill.isChecked = e.target.checked;
      }
    });
    this.setState({ listAllSkill }, () => this.updateListChosenSkill());
  }

  updateInfo = () => {
    const {
      listChosenSkill,
      name,
      address,
      introduce,
      pricePerHour
    } = this.state;
    console.log('listChosenSkill: ----', listChosenSkill);
    console.log('name: ----', name);
    console.log('address: ----', address);
    console.log('introduce: ----', introduce);
    console.log('pricePerHour: ----', pricePerHour);
  };

  render() {
    const { userDetail } = this.props;
    const { listAllSkill, name, address, introduce, pricePerHour } = this.state;

    if (userDetail && introduce) {
      if (userDetail.role === 'tutor') {
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
                            defaultValue={name}
                            name="name"
                            onChange={this.handleInputChange}
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
                            defaultValue={address}
                            name="address"
                            onChange={this.handleInputChange}
                          />
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col md="12">
                          <TextField
                            id="outlined-multiline-flexible"
                            label="Tự giới thiệu"
                            defaultValue={introduce}
                            fullWidth
                            multiline
                            rows="4"
                            variant="outlined"
                            onChange={this.handleInputChange}
                            name="introduce"
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
                            defaultValue={pricePerHour}
                            variant="outlined"
                            required
                            onChange={this.handleInputChange}
                            name="pricePerHour"
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

                            {this.renderAllSkill()}
                            {/* <FormControlLabel
                              control={<Checkbox color="primary" />}
                              label="Luyện thi đại học khối A"
                            />
                            <FormControlLabel
                              control={<Checkbox color="primary" />}
                              label="Huấn luyện người ngu hết thuốc chữa"
                            /> */}
                          </FormControl>
                        </Col>
                      </Row>

                      <Button theme="accent" onClick={() => this.updateInfo()}>
                        Cập nhật
                      </Button>
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
