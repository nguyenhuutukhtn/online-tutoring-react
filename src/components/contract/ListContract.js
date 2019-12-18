import React, { Component } from 'react';

import { Badge, Card, Media, Table, Button } from 'react-bootstrap';

import './contract.css';
import history from '../../helpers/history';

class ListContracts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // showPopup: false
    };
  }

  componentDidMount() {}

  handleDetailClick = () => {
    history.push('/contract-detail');
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
              <th scope="col">Gia sư</th>
              <th scope="col">Phí</th>
              <th scope="col">Xác nhận</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Thanh toán</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="avatar"
                      src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                  </Media>
                </Media>
              </th>
              <td>160000d</td>
              <td>
                <Badge pill variant="success">
                  Đã xác nhận
                </Badge>
              </td>
              <td>
                <Badge pill variant="primary">
                  Đang học
                </Badge>
              </td>
              <td>
                <Badge pill variant="danger">
                  Chưa thanh toán
                </Badge>
              </td>
              <td className="text-right">
                <Button
                  variant="info"
                  className="detail-button"
                  onClick={() => this.handleDetailClick()}
                >
                  Chi tiết
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Media className="align-items-center">
                  <a
                    className="avatar rounded-circle mr-3"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      alt="avatar"
                      src="https://res.cloudinary.com/dsqfchskj/image/upload/v1576326328/Tutor/78905118_2276223572479557_610009197119012864_o_xdb3x8.jpg"
                    />
                  </a>
                  <Media>
                    <span className="mb-0 text-sm">Nguyễn Hữu Tú</span>
                  </Media>
                </Media>
              </th>
              <td>120000d</td>
              <td>
                <Badge pill variant="warning">
                  Đang chờ
                </Badge>
              </td>
              <td>
                <Badge pill variant="danger">
                  Đang khiếu nại
                </Badge>
              </td>
              <td>
                <Badge pill variant="danger">
                  Chưa thanh toán
                </Badge>
              </td>
              <td className="text-right">
                <Button
                  variant="info"
                  className="detail-button"
                  onClick={() => this.handleDetailClick()}
                >
                  Chi tiết
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    );
  }
}

export default ListContracts;
