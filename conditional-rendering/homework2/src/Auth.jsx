import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    setTimeout(
      () =>
        this.setState({
          isLoggedIn: true,
        }),
      2000
    );
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const html = this.state.isLoggedIn ? (
      <>
        <Spinner size={20} />
        <Logout onLogout={this.handleLogout} />
      </>
    ) : (
      <>
        <Login onLogin={this.handleLogin} />
      </>
    );
    return html;
  }
}

export default Auth;
