import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    isOnline: true,
    text: 'online',
  };

  componentDidMount() {
    console.log(this.state.isOnline);
    this.setState({
      isOnline: window.navigator.onLine,
    });
    if (this.state.status) {
      window.addEventListener('online', this.onOnline);
    } else window.addEventListener('offline', this.onOffline);
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
    const el = document.querySelector('.status');
    el.classList.add('status_offline');
  };

  onOffline = () => {
    this.setState({
      isOnline: false,
      text: 'offline',
    });
  };

  render() {
    const html = this.state.isOnline ? (
      <div className='status'>{this.state.text}</div>
    ) : (
      <div className='status status_offline'>{this.state.text}</div>
    );

    return html;
  }
}

export default ConnectionStatus;
