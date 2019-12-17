import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTab: 0 };
  }

  componentDidMount() {}

  handleChange = (event, value) => {
    const { currentTab } = this.state;
    this.setState({ currentTab: value });
  };

  render() {
    const { currentTab } = this.state;
    return (
      <Container>
        <Row>
          <Col md="3">
            <div
              style={{
                flexGrow: 1,

                display: 'flex'
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={currentTab}
                aria-label="Vertical tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
              </Tabs>
              <TabPanel value={currentTab} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={currentTab} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={currentTab} index={2}>
                Item Three
              </TabPanel>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default PersonalInfo;
