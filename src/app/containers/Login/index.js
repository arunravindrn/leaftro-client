import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
          <form className="login-form" method="#">
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button onClick={this.redirect.bind(this)}>login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    );
  }

  redirect(e) {
    e.preventDefault();
    console.log("now");
    this.props.history.push("/accounts");
  }

}

export default Login;
