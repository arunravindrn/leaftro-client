import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from 'theme-default';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBarRouteData from './routes';
import Header from 'components/common/Header';
import LeftDrawer from 'components/common/LeftDrawer';

import Accounts from 'containers/Accounts';
import Login from 'containers/Login';

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
    if (!this.state.isAuthenticated) {
      console.log("Oh Yeah")
      // this.redirect();
      console.log("this.this.state.", this.state);
    }
  }

  redirect() {
    this.props.history.push('/login');
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

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={NavBarRouteData.menus}
                        username="User Admin"/>

            <div style={styles.container}>
              <Switch>
                <Route path="/accounts" component={Accounts} />
              </Switch>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

const mapStateToProps = state => {
  console.log("state", state);
  return state.auth;
};

const mapDispatchToProps = dispatch => ({
  // redirect:
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
