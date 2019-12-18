import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Skeleton from 'react-loading-skeleton';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  TextField,
  Button
} from '@material-ui/core';
import TutorItemSkeleton from '../skeleton/TutorItemSkeleton';
import PageTitle from '../page-title/PageTitle';
import TutorItem from './TutorItem';
import './tutor.css';
import { requestListTutor, requestListSkill } from '../../actions/tutor.action';

class ListTutor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseSkill: false,
      listTutor: [],
      listSkill: [],
      currentPage: 1,
      totalPage: 0,
      listSkillChecked: [],
      from: null,
      to: null
    };
    this.collapseSkillClick = this.collapseSkillClick.bind(this);
    this.handleCheckBoxOnChange = this.handleCheckBoxOnChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    const { listTutor, listSkill } = this.props;
    listTutor(1, null, null, null, res => {
      this.setState({
        listTutor: res,
        totalPage: Math.ceil(res.count / 9)
      });
    });
    listSkill(res => {
      this.setState({
        listSkill: res.data.map(item => {
          return {
            id: item.id,
            name: item.name,
            isChecked: 0
          };
        })
      });
    });
  }

  onInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  renderListTutor = () => {
    const { listTutor } = this.state;
    const tutorMatrix = [];
    if (listTutor.length === 0) return null;
    for (let i = 0; i < listTutor.data.length; i += 3) {
      const children = [];
      for (let j = i; j < i + 3; j += 1) {
        if (listTutor.data[j]) {
          children.push(
            <Col lg="4">
              <TutorItem data={listTutor.data[j]} />
            </Col>
          );
        }
      }
      tutorMatrix.push(<Row>{children}</Row>);
    }
    return tutorMatrix;
  };

  renderSkill = () => {
    const { listSkill } = this.state;
    const listSkillElement = listSkill.map((skill, idx) => {
      if (idx < 6) {
        return (
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={skill.name}
            value={skill.id}
            className="float-left text-left"
            checked={skill.isChecked}
            onChange={this.handleCheckBoxOnChange}
          />
        );
      }
      return null;
    });
    return listSkillElement;
  };

  renderCollapseSkill = () => {
    const { listSkill } = this.state;
    const listSkillElement = listSkill.map((skill, idx) => {
      if (idx >= 6) {
        return (
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={skill.name}
            value={skill.id}
            checked={skill.isChecked}
            className="float-left text-left"
            onChange={this.handleCheckBoxOnChange}
          />
        );
      }
      return null;
    });
    return listSkillElement;
  };

  handleFilter = () => {
    const { listSkillChecked, listSkill, from, to } = this.state;
    const { listTutor } = this.props;
    const listIdSkillChecked = [];
    listSkill.forEach(skill => {
      if (skill.isChecked) {
        listSkillChecked.push(skill);
        listIdSkillChecked.push(skill.id);
      }
    });

    listTutor(1, listIdSkillChecked, from, to, res => {
      this.setState({
        listTutor: res,
        totalPage: Math.ceil(res.count / 9)
      });
    });
  };

  onPageChange = page => {
    const { listTutor } = this.props;
    listTutor(page, null, null, null, res => {
      this.setState({
        listTutor: res,
        totalPage: Math.ceil(res.count / 9),
        currentPage: page
      });
    });
  };

  handleCheckBoxOnChange(e) {
    const { listSkill } = this.state;

    listSkill.forEach(skill => {
      // eslint-disable-next-line eqeqeq
      if (skill.id == e.target.value) {
        // eslint-disable-next-line no-param-reassign
        skill.isChecked = e.target.checked;
      }
    });
    this.setState({ listSkill });
  }

  collapseSkillClick() {
    const { collapseSkill } = this.state;
    this.setState({
      collapseSkill: !collapseSkill
    });
  }

  renderPage = () => {
    const { totalPage, currentPage } = this.state;
    const listPage = [];
    for (let i = 0; i < totalPage; i += 1) {
      listPage.push(
        <Pagination.Item
          active={currentPage === i + 1}
          onClick={() => this.onPageChange(i + 1)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }
    return listPage;
  };

  render() {
    const { collapseSkill, listSkill, listTutor } = this.state;

    return (
      <div className="mx-auto list-tutor-page">
        <Container
          className="main-content-container main-list-tutor"
          expand="lg"
        >
          <Row className="page-header">
            <PageTitle
              title="Danh sách gia sư hiện có"
              subtitle="Gia sư"
              md="12"
              className="ml-sm-auto mr-sm-auto page-title"
            />
          </Row>
          <Row>
            <Col lg="9" className="noPadding noMargin">
              <Container
                expand="lg"
                fluid
                style={{ paddingLeft: 0, paddingRight: 0 }}
                className="noPadding noMargin container-fluid"
              >
                {listTutor.length !== 0 ? null : (
                  <div>
                    <Row>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                      <Col md="4">
                        <TutorItemSkeleton />
                      </Col>
                    </Row>
                  </div>
                )}
                {this.renderListTutor()}
                <Row>
                  <Col lg="12">
                    <Pagination
                      className="text-center mt-4 mx-auto float-center d-flex justify-content-center"
                      align="center"
                    >
                      {this.renderPage()}
                    </Pagination>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg="3" className="no-padding-right no-margin-right">
              <Container className="filter-range no-padding-right no-margin-right pb-4">
                <Row>
                  <Col>
                    <div className="d-flex flex-row mt-3">
                      <SearchIcon className="search-icon" />
                      <div className="filter-title">Lọc kết quả</div>
                    </div>
                  </Col>
                </Row>
                <Row form>
                  <Col md="12">
                    <FormControl className="mt-4">
                      <FormLabel
                        component="legend"
                        className="float-left text-left"
                        fullWidth
                      >
                        Theo kỹ năng
                      </FormLabel>
                      {listSkill.length !== 0 ? null : (
                        <div>
                          <Skeleton count={10} />
                        </div>
                      )}
                      <div>{this.renderSkill()}</div>
                      {collapseSkill ? (
                        <div>{this.renderCollapseSkill()}</div>
                      ) : null}
                    </FormControl>
                  </Col>
                </Row>
                {!collapseSkill ? (
                  <Row>
                    <Col md="12">
                      <KeyboardArrowDownIcon
                        style={{
                          backgroundColor: '#00000000',
                          color: '#007BFF',
                          height: '40px',
                          width: '40px'
                        }}
                        onClick={this.collapseSkillClick}
                        className="text-center mt-0 mx-auto float-center d-flex justify-content-center"
                      />
                    </Col>
                  </Row>
                ) : null}
                {collapseSkill ? (
                  <Row>
                    <Col md="12">
                      <KeyboardArrowUpIcon
                        style={{
                          backgroundColor: '#00000000',
                          color: '#007BFF',
                          height: '40px',
                          width: '40px'
                        }}
                        onClick={this.collapseSkillClick}
                        className="text-center mt-0 mx-auto float-center d-flex justify-content-center"
                      />
                    </Col>
                  </Row>
                ) : null}
                <Row form>
                  <Col md="12">
                    <FormControl className="mt-4 float-left text-left">
                      <FormLabel
                        component="legend"
                        className="float-left text-left"
                        fullWidth
                      >
                        Khoảng giá
                      </FormLabel>
                      <form noValidate autoComplete="off">
                        <TextField
                          id="price-from"
                          label="Từ (Đơn vị: ngàn/giờ)"
                          variant="outlined"
                          name="from"
                          onChange={this.onInputChange}
                        />
                        <div className="text-center mt-0 float-center d-flex justify-content-center minus-icon">
                          -
                        </div>
                        <TextField
                          id="price-to"
                          label="Đến (Đơn vị: ngàn/giờ)"
                          variant="outlined"
                          name="to"
                          onChange={this.onInputChange}
                        />
                      </form>
                      <div />
                    </FormControl>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      style={{
                        backgroundColor: '#007BFF',
                        color: '#ffffff'
                      }}
                      variant="contained"
                      className="detail-button mt-4"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => {
                        this.handleFilter();
                      }}
                    >
                      Lọc kết quả
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  listTutor: (page, listSkill, from, to, cb) =>
    dispatch(requestListTutor(page, listSkill, from, to, cb)),
  listSkill: cb => dispatch(requestListSkill(cb))
});

export default connect(
  null,
  mapDispatchToProps
)(ListTutor);
