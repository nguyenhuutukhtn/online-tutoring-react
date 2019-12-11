import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import Login from './components/login/Login';
import UserDetails from './components/profile/UserDetails';
import UserAccountDetails from './components/profile/UserAccountDetails';
import UserProfileLite from './components/profile/UserProfileLite';
import PageTitle from './components/page-title/PageTitle';
import Register from './components/register/register';
import Home from './components/home/Home';
import TutorItem from './components/tutor/TutorItem';
import ListTutor from './components/tutor/ListTutor';
import { history } from './helpers/history';
import { MDBContainer, MDBAlert, MDBNotification } from 'mdbreact';
import { alertActions } from './actions/alert.action';
import { connect } from 'react-redux';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import { MDBSpinner } from 'mdbreact';
import CommonNavbar from './components/navbar/CommonNavbar';
import Footer from './components/footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
      // window.location.reload();
      console.log('history change');
    });
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="App">
        <Router history={history}>
          {alert.message && (
            <MDBAlert className={`alert text-center ${alert.type}`}>
              {alert.message}
            </MDBAlert>
          )}
          <CommonNavbar />
          <div className="main-route-place">
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/user-detail" component={UserDetails} />
              <Route
                path="/user-account-detail"
                component={UserAccountDetails}
              />
              <Route path="/page-title" component={PageTitle} />
              <Route path="/profile" component={UserProfileLite} />
              <Route path="/tutor-item" component={TutorItem} />
              <Route path="/list-tutor" component={ListTutor} />
              <Route path="/" component={Home} />

              <Redirect from="*" to="/" />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(
  mapState,
  actionCreators
)(App);

export default connectedApp;
