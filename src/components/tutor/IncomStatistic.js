import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Line, Doughnut, Radar, Bar } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';

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
            data: [
              1200,
              1300,
              1400,
              1500,
              1600,
              1500,
              1200,
              1300,
              1400,
              1500,
              1400,
              1500
            ],
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

export default IncomeStatistic;
