import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import saga from './sagas';
import reducer from './reducers';
import { requestLogin } from './actions';
import { makeSelectRequesting } from './selectors';


class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      isRequesting: false
    }
  }

  handleChangeData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      email: this.state.username,
      password: this.state.password
    }
    this.props.dispatch(requestLogin(data));
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form" >
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className="login-form">
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChangeData.bind(this)} name="username" />
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChangeData.bind(this)} name="password" />
            <button onClick={this.handleSubmit.bind(this)} >login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    );
  }

}

Login.propTypes = {
  onSubmitForm: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting()
})

const mapDispatchToProps = (dispatch) => {
  return {
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
