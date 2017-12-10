/*****************************
 * Author : <%= user %>
 * Created on : <%= date %>
 *****************************/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import MDSpinner from 'react-md-spinner';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton'

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import styles from './styles';
import saga from './sagas';
import reducer from './reducers';
import { requestLogin } from './actions';
import {
  makeSelectRequesting,
  makeSelectSuccess
} from './selectors';

import { checkIsAuthenticated } from 'containers/App/actions';
import { makeSelectIsAuthenticated } from 'containers/App/selectors';


class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount() {
    this.props.checkIsAuthenticated();
  }

  handleChangeData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.dispatch(requestLogin(data));
  }

  componentDidUpdate() {
    if (this.props.isSuccess) {
      this.props.history.push('/');
    }
  }

  render() {

    const loadingSpinner = (text) => {
      if (this.props.isRequesting) {
        return <MDSpinner size={18} />;
      } else {
        return text;
      }
    }

    return (
      <div className="login-page">
        <div className="form" >
          <form>
            <TextField floatingLabelText="Email" name="email" value={this.state.email} onChange={this.handleChangeData.bind(this)} />
            <TextField floatingLabelText="Password" name="password" value={this.state.password} onChange={this.handleChangeData.bind(this)} />
            <FlatButton label={loadingSpinner("login")} onClick={this.handleSubmit.bind(this)} disabled={!(this.state.email && this.state.password)} style={styles.button} />
            <p className="message">Not registered? <a href="#" >Create an account</a></p>
          </form>
        </div>
      </div>
    );
  }

}

Login.propTypes = {

}

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  isSuccess: makeSelectSuccess(),
  isAuthenticated: makeSelectIsAuthenticated()
})

const mapDispatchToProps = (dispatch) => {
  return {
    checkIsAuthenticated: () => dispatch(checkIsAuthenticated()),
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Login);
