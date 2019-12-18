import React from 'react';
import { connect } from 'react-redux';
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
import { updateTutorProfile } from '../../actions/tutor.action';
import userActions from '../../actions/user.action';

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
        introduce: introduce ? introduce.content : '',
        pricePerHour: userDetail.pricePerHour,
        listAllSkill: listAllSkill.map(itemInAllSkill => {
          let isChosen = false;
          listTutorSkill.forEach(itemInTutorSkill => {
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

  updateListChosenSkill = () => {
    const { listAllSkill } = this.state;
    this.setState({
      listChosenSkill: listAllSkill.filter(item => item.isChecked === true)
    });
  };

  renderAllSkill = () => {
    const { listAllSkill } = this.state;
    const listAllSkillElement = listAllSkill.map(skill => {
      return (
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={skill.name}
          value={skill.id}
          checked={skill.isChecked}
          onChange={this.handleCheckBoxOnChange}
        />
      );
    });
    return listAllSkillElement;
  };

  updateInfo = () => {
    const {
      listChosenSkill,
      name,
      address,
      introduce,
      pricePerHour
    } = this.state;
    const { updateTutorInfo, userDetail, updateStudentProfile } = this.props;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    const listSkill = listChosenSkill.map(skill => {
      return skill.id;
    });
    if (userDetail.role === 'tutor') {
      updateTutorInfo(name, pricePerHour, address, introduce, listSkill, token);
    } else {
      updateStudentProfile(token, name, address);
    }

    // console.log('listChosenSkill: ----', listChosenSkill);
    // console.log('name: ----', name);
    // console.log('address: ----', address);
    // console.log('introduce: ----', introduce);
    // console.log('pricePerHour: ----', pricePerHour);
  };

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleCheckBoxOnChange(e) {
    const { listAllSkill } = this.state;

    listAllSkill.forEach(skill => {
      // eslint-disable-next-line eqeqeq
      if (skill.id == e.target.value) {
        // eslint-disable-next-line no-param-reassign
        skill.isChecked = e.target.checked;
      }
    });
    this.setState({ listAllSkill }, () => this.updateListChosenSkill());
  }

  render() {
    const { userDetail } = this.props;
    const { introduce } = this.state;

    if (userDetail) {
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
                          defaultValue={userDetail.address}
                          name="address"
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>
                    {userDetail.role === 'tutor' ? (
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
                    ) : (
                      <Button theme="accent" onClick={() => this.updateInfo()}>
                        Cập nhật
                      </Button>
                    )}
                  </Form>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
          {userDetail.role === 'tutor' ? (
            <div>
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
                            </FormControl>
                          </Col>
                        </Row>

                        <Button
                          theme="accent"
                          onClick={() => this.updateInfo()}
                        >
                          Cập nhật
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </div>
          ) : null}
        </Card>
      );
    }
    return null;
  }
}

const mapDispatchToProps = {
  updateTutorInfo: updateTutorProfile,
  updateStudentProfile: userActions.updateProfile
};

export default connect(
  null,
  mapDispatchToProps
)(UserAccountDetails);
