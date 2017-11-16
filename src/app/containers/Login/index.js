import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import saga from './sagas';
import reducer from './reducers';

class Login extends React.Component {
  constructor() {
    super();
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
          <form className="login-form" method="#">
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button onClick={this.props.onSubmitForm} >login</button>
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

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = () => {
  return {};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga
)(Login);
