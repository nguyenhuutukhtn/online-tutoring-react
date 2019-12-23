import React, { Component } from 'react';
import moment from 'moment';

import { Badge, Card, Media, Table, Button, Pagination } from 'react-bootstrap';

import './contract.css';
import history from '../../helpers/history';

class ListContracts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {}

  onListContractPageChange = page => {
    const { onPageChange } = this.props;
    onPageChange(page);
    this.setState({
      currentPage: page
    });
  };

  handleDetailClick = id => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo.role === 'tutor') {
      return history.push({
        pathname: '/tutor-contract-detail',
        search: `?id=${id}`
      });
    }
    return history.push({
      pathname: '/contract-detail',
      search: `?id=${id}`
    });
  };

  renderStatus = status => {
    let result;
    switch (status) {
      case 'new':
        result = (
          <Badge pill variant="primary">
            Mới
          </Badge>
        );
        break;
      case 'approve':
        result = (
          <Badge pill variant="info ">
            Đã chấp nhận
          </Badge>
        );
        break;
      case 'complete':
        result = (
          <Badge pill variant="success  ">
            Đã hoàn thành
          </Badge>
        );
        break;
      case 'cancel':
        result = (
          <Badge pill variant="danger  ">
            Đã huỷ
          </Badge>
        );
        break;
      default:
        break;
    }
    return result;
  };

  renderPaymentStatus = status => {
    let result;
    switch (status) {
      case 'yes':
        result = (
          <Badge pill variant="success">
            Đã thanh toán
          </Badge>
        );
        break;
      case 'no':
        result = (
          <Badge pill variant="danger ">
            Chưa thanh toán
          </Badge>
        );
        break;
      default:
        break;
    }
    return result;
  };

  renderPage = () => {
    const { currentPage } = this.state;
    const { count } = this.props;
    const totalPage = Math.ceil(count / 5);
    const listPage = [];
    for (let i = 0; i < totalPage; i += 1) {
      listPage.push(
        <Pagination.Item
          active={currentPage === i + 1}
          onClick={() => this.onListContractPageChange(i + 1)}
        >
          {i + 1}
        </Pagination.Item>
      );
    }
    return listPage;
  };

  renderRow = () => {
    const { data } = this.props;
    let listRow = null;
    if (data) {
      listRow = data.map(policy => {
        return (
          <tr>
            <th scope="row">
              <Media className="align-items-center">
                <a
                  className="rounded-circle mr-3"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="avatar"
                    src={
                      policy.student_avatar
                        ? policy.student_avatar
                        : 'https://res.cloudinary.com/dsqfchskj/image/upload/v1576583327/Tutor/default-avatar_iyzn7y.png'
                    }
                    className="rounded-circle"
                    style={{
                      height: '48px',
                      width: '48px'
                    }}
                  />
                </a>
                <Media>
                  <span className="mb-0 text-sm">{policy.name}</span>
                </Media>
              </Media>
            </th>
            <td>{policy.price}K VNĐ</td>
            <td>
              <Badge pill variant="success">
                {policy.hours_hire}
              </Badge>
            </td>
            <td>
              <Badge pill variant="primary">
                {moment(policy.register_date).format('DD-MM-YYYY HH:mm:ss')}
              </Badge>
            </td>
            <td>{this.renderStatus(policy.status)}</td>
            <td>{this.renderPaymentStatus(policy.payment_status)}</td>
            <td className="text-right">
              <Button
                variant="info"
                className="detail-button"
                onClick={() => this.handleDetailClick(policy.id)}
              >
                Chi tiết
              </Button>
            </td>
          </tr>
        );
      });
    }
    return listRow;
  };

  render() {
    return (
      <Card className="mt-4">
        <Card.Header className="border-0">
          <h4 className="mb-0">Danh sách hợp đồng</h4>
        </Card.Header>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Người thuê</th>
              <th scope="col">Phí</th>
              <th scope="col">Số giờ thuê</th>
              <th scope="col">Ngày đăng kí</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Thanh toán</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </Table>
        <Pagination
          className="text-center mt-4 mx-auto float-center d-flex justify-content-center"
          align="center"
        >
          {this.renderPage()}
        </Pagination>
      </Card>
    );
  }
}

export default ListContracts;
