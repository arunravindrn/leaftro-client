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
import { makeSelectRequesting, makeSelectSuccess } from './selectors';


class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      hideClass: 'register-form',
      showClass: 'login-form'
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
      email: this.state.email,
      password: this.state.password
    }
    this.props.dispatch(requestLogin(data));
  }

  componentDidUpdate() {
    console.log("did update")
    console.log("this.props.isSuccess", this.props.isSuccess)
    if (this.props.isSuccess) {
      this.props.history.push('/');
    }
  }

  handleChangeForm(e) {
    e.preventDefault();
    this.setState({
      showClass: this.state.hideClass,
      hideClass: this.state.showClass
    });
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className={this.state.hideClass} >
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#" onClick={this.handleChangeForm.bind(this)} >Sign In</a></p>
          </form>
          <form className={this.state.showClass} >
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChangeData.bind(this)} name="email" />
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChangeData.bind(this)} name="password" />
            <button onClick={this.handleSubmit.bind(this)} >login</button>
            <p className="message">Not registered? <a href="#" onClick={this.handleChangeForm.bind(this)}>Create an account</a></p>
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
  isSuccess: makeSelectSuccess()
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
