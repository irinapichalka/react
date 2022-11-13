import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      showSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      showSpinner: true,
    });
    setTimeout(
      () =>
        this.setState({
          isLoggedIn: true,
          showSpinner: false,
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
        <Logout
          onLogout={this.handleLogout}
          onShowSpinner={this.state.showSpinner}
        />
      </>
    ) : (
      <>
        <Login onLogin={this.handleLogin} />
      </>
    );

    if (this.state.showSpinner) return <Spinner size={10} />;
    else return html;
  }
}

export default Auth;
