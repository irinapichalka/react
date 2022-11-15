import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    isOnline: true,
  };

  componentDidMount() {
    this.setState({
      isOnline: window.navigator.onLine,
    });
    window.addEventListener('online', this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }

  onOnline = () => {
    this.setState({
      isOnline: true,
      text: 'online',
    });
  };

  onOffline = () => {
    this.setState({
      isOnline: false,
    });
  };

  render() {
    const html = this.state.isOnline ? (
      <div className='status'>online</div>
    ) : (
      <div className='status status_offline'>offline</div>
    );

    return html;
  }
}

export default ConnectionStatus;
