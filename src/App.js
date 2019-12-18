/* eslint-disable no-undef */
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Login from './components/login/Login';
import UserDetails from './components/profile/UserDetails';
import UserAccountDetails from './components/profile/UserAccountDetails';
import UserProfileLite from './components/profile/UserProfileLite';
import PageTitle from './components/page-title/PageTitle';
import Register from './components/register/register';
import Home from './components/home/Home';
import TutorItem from './components/tutor/TutorItem';
import ListTutor from './components/tutor/ListTutor';
import history from './helpers/history';
import alertActions from './actions/alert.action';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import CommonNavbar from './components/navbar/CommonNavbar';
import Footer from './components/footer/Footer';
import TutorInfo from './components/tutor/TutorInfo';
import TutorHistory from './components/tutor/TutorHistory';
import TutorDetail from './components/tutor/TutorDetail';
import TutorReview from './components/tutor/TutorReview';
import TutorContracy from './components/contract/TutorContract';
import PersonalInfo from './components/personalPage/PersonalInfo';
import ContractDetail from './components/contract/ContractDetail';
import ChangePassword from './components/profile/ChangePassword';
// import Messenger from './components/chat/Messenger';
import Chat from './components/chat/Chat';
import IncomeStatistic from './components/tutor/IncomStatistic';
import CustomAlert from './customs/CustomAlert';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen(() => {
      window.location.reload();
    });
    this.clearAlert = this.clearAlert.bind(this);
  }

  clearAlert() {
    const { clearAlert } = this.props;
    clearAlert('clear');
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="App">
        <Router history={history}>
          {alert && (
            <CustomAlert
              open={alert.open}
              variant={alert.type}
              message={alert.message ? alert.message : ' '}
              onClose={this.clearAlert}
            />
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
              <PrivateRoute path="/profile" component={UserProfileLite} />
              <Route path="/tutor-item" component={TutorItem} />
              <Route path="/list-tutor" component={ListTutor} />
              <Route path="/tutor-info" component={TutorInfo} />
              <Route path="/tutor-history" component={TutorHistory} />
              <Route path="/tutor-detail" component={TutorDetail} />
              <Route path="/tutor-review" component={TutorReview} />
              <Route path="/tutor-contract" component={TutorContracy} />
              <Route path="/personal-info" component={PersonalInfo} />
              <Route path="/contract-detail" component={ContractDetail} />
              <PrivateRoute
                path="/change-password"
                component={ChangePassword}
              />
              <Route path="/chat" component={Chat} />
              <Route path="/income-statistic" component={IncomeStatistic} />
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

const actionCreators = dispatch => ({
  clearAlert: message => {
    dispatch(alertActions.clear(message));
  }
});

const connectedApp = connect(
  mapState,
  actionCreators
)(App);

export default connectedApp;
