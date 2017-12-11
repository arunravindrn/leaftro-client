import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from 'theme-default';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import NavBarRouteData from './routes';
import Header from 'components/common/Header';
import LeftDrawer from 'components/common/LeftDrawer';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Login from 'containers/Login';
import Accounts from 'containers/Accounts';
import { makeSelectUser, makeSelectIsChecking, makeSelectIsAuthenticated } from './selectors';
import saga from './sagas';
import reducer from './reducers';
import { authValidate, authenticated } from './actions';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
      isAuthenticated: false,
      userId: null,
      userData: {}
    };
  }

  componentWillMount() {
    if (!this.props.isAuthenticated) this.props.authValidate();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  componentDidUpdate() {
  }

  render() {

    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      },
    };

    const showHeader = () => {
      if (this.props.isAuthenticated) {
        return (
          <div>
            <Header
              styles={styles.header}
              handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
            />

            <LeftDrawer navDrawerOpen={navDrawerOpen}
              menus={NavBarRouteData.menus}
              username="User Admin"
            />
          </div>
        );
      }
    }

    return (

      <div>
        {showHeader()}
        <div style={styles.container}>
          <Switch>
            <Route exact path="/login"
              render={ () => <Login onLogin={this.props.authenticated} /> }
            />
            <Route path="/accounts" component={Accounts} />
          </Switch>
        </div>
      </div>

    );
  }
}

App.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUser(),
  isChecking: makeSelectIsChecking(),
  isAuthenticated: makeSelectIsAuthenticated()
});

const mapDispatchToProps = dispatch => {
  return {
    authValidate: () => dispatch(authValidate()),
    authenticated: () => dispatch(authenticated()),
    dispatch
  };
};


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);




    // return (
    //   <MuiThemeProvider muiTheme={ThemeDefault}>
    //     <div>
    //       <Header styles={styles.header}
    //               handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

    //         <LeftDrawer navDrawerOpen={navDrawerOpen}
    //                     menus={NavBarRouteData.menus}
    //                     username="User Admin"/>

    //         <div style={styles.container}>
    //           <Switch>
    //             <Route path="/accounts" component={Accounts} />
    //           </Switch>
    //         </div>
    //     </div>
    //   </MuiThemeProvider>
    // );

    // <Route exact path="/login" component={Login} />
