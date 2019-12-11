import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  TextField,
  Button
} from '@material-ui/core';
import PageTitle from '../page-title/PageTitle';
import TutorItem from './TutorItem';
import './tutor.css';

export default class ListTutor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseSkill: false
    };
    this.collapseSkillClick = this.collapseSkillClick.bind(this);
  }

  collapseSkillClick() {
    const { collapseSkill } = this.state;
    this.setState({
      collapseSkill: !collapseSkill
    });
  }

  render() {
    const { collapseSkill } = this.state;
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
                <Row className="">
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                </Row>
                <Row className="">
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                </Row>
                <Row className="">
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                  <Col lg="4">
                    <TutorItem />
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <Pagination
                      className="text-center mt-4 mx-auto float-center d-flex justify-content-center"
                      align="center"
                    >
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                      <Pagination.Item>{13}</Pagination.Item>
                      <Pagination.Item disabled>{14}</Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item>{20}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
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

                      <div>
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Luyện thi đại học khối A"
                          className="float-left text-left"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Huấn luyện người ngu hết thuốc chữa"
                          className="float-left text-left"
                        />
                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Luyện thi đại học khối A"
                          className="float-left text-left"
                        />

                        <FormControlLabel
                          control={<Checkbox color="primary" />}
                          label="Huấn luyện người ngu hết thuốc chữa"
                          className="float-left text-left"
                        />
                      </div>
                      {collapseSkill ? (
                        <div>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Luyện thi đại học khối A"
                            className="float-left text-left"
                          />

                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Huấn luyện người ngu hết thuốc chữa"
                            className="float-left text-left"
                          />
                        </div>
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
                        />
                        <div className="text-center mt-0 float-center d-flex justify-content-center minus-icon">
                          -
                        </div>
                        <TextField
                          id="price-to"
                          label="Đến (Đơn vị: ngàn/giờ)"
                          variant="outlined"
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
