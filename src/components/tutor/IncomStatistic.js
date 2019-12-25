import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { requestIncomeStatistic } from '../../actions/tutor.action';

class IncomeStatistic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBar: {
        labels: [
          'Tháng 1',
          'Tháng 2',
          'Tháng 3',
          'Tháng 4',
          'Tháng 5',
          'Tháng 6',
          'Tháng 7',
          'Tháng 8',
          'Tháng 9',
          'Tháng 10',
          'Tháng 11',
          'Tháng 12'
        ],
        datasets: [
          {
            label: 'Doanh thu',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#A7B7CA',
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
  }

  componentDidMount = () => {
    const { getIncomeStatistic } = this.props;
    const { dataBar } = this.state;
    const { token } = JSON.parse(localStorage.getItem('userInfo'));
    getIncomeStatistic(token, res => {
      this.setState({
        dataBar: {
          ...dataBar,
          datasets: [
            {
              label: 'Doanh thu',
              data: res.data,
              backgroundColor: '#A7B7CA',
              borderWidth: 1
            }
          ]
        }
      });
    });
  };

  render() {
    const { dataBar, barChartOptions } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Header>
                <Typography variant="h5">Thống kê doanh thu</Typography>
              </Card.Header>
              <Card.Body>
                <Bar data={dataBar} height={500} options={barChartOptions} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getIncomeStatistic: (token, cb) => dispatch(requestIncomeStatistic(token, cb))
});

export default connect(
  null,
  mapDispatchToProps
)(IncomeStatistic);
