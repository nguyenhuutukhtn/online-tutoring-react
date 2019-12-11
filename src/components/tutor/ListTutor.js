import React from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import './tutor.css';
import PageTitle from '../page-title/PageTitle';
import UserDetails from '../profile/UserDetails';
import TutorItem from './TutorItem';

const ListTutor = () => (
  <div className="mx-auto list-tutor-page">
    <Container className="main-content-container main-list-tutor" expand="lg">
      <Row className="page-header">
        <PageTitle
          title="Danh sách gia sư hiện có"
          subtitle="Gia sư"
          md="12"
          className="ml-sm-auto mr-sm-auto page-title"
        />
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
  </div>
);

export default ListTutor;
