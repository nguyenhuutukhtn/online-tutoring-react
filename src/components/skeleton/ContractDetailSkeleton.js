import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  IconButton,
  Typography,
  ListItem,
  ListItemText
} from '@material-ui/core';

class ContractDetailSkeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card.Body className="pb-5">
          <Row>
            <Col className="noPadding mt-2">
              <div>
                <IconButton
                  disableRipple
                  disableFocusRipple
                  className="float-left mt-0"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <ArrowBackIosIcon
                    style={{ color: '#1D4575' }}
                    className="d-inline mt-1"
                  />
                </IconButton>
                <Typography
                  color="primary"
                  className="text-left float-left mt-3"
                >
                  Quay về trang quản lý
                </Typography>
              </div>
            </Col>
          </Row>
          <Row className="noMargin noPadding">
            <Col className="noMargin noPadding">
              <Typography
                color="primary"
                variant="h4"
                className="mt-4 text-left"
                style={{ color: '#495057' }}
              >
                Chi tiết hợp đồng
              </Typography>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm={8} className="noMargin noPadding">
              <Card>
                <Card.Body>
                  <Container>
                    <Row>
                      <Col>
                        <Skeleton className="mt-2" height={30} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Skeleton className="mt-2" height={30} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Skeleton className="mt-2" height={30} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Skeleton className="mt-2" height={30} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Skeleton className="mt-2" height={30} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Skeleton className="mt-2" height={30} />
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Header>
                  <h5 className="mb-0">Thông tin các bên</h5>
                </Card.Header>
                <Card.Body>
                  <div className="text-left ml-3">Gia sư</div>
                  <ListItem>
                    <Skeleton circle height={49} width={49} />
                    <ListItemText
                      primary={<Skeleton height={20} />}
                      secondary={<Skeleton height={20} />}
                    />
                  </ListItem>

                  <div className="text-left ml-3 mt-3">Học sinh</div>
                  <ListItem>
                    <Skeleton circle height={49} width={49} />
                    <ListItemText
                      primary={<Skeleton height={20} />}
                      secondary={<Skeleton height={20} />}
                    />
                  </ListItem>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </div>
    );
  }
}

export default ContractDetailSkeleton;
