import React from 'react';

class ConectionStatus extends React.Component {
  state = {
    isOnline: true,
    text: 'Online',
  };

  componentDidMount() {
    console.log(this.state.isOnline);
    this.setState({
      status: window.navigator.onLine,
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
      text: 'Online',
    });
    const el = document.querySelector('.status');
    el.classList.add('status_offline');
  };

  onOffline = () => {
    this.setState({
      isOnline: false,
      text: 'Offline',
    });
    const el = document.querySelector('.status');
    el.classList.remove('status_offline');
  };

  render() {
    console.log(this.state.isOnline);
    return <div className='status'>{this.state.text}</div>;
  }
}

export default ConectionStatus;
