import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: false,
    };
  }

  changeStatus = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    let html;

    if (this.state.isOnline) {
      html = <Online />;
    } else {
      html = <Offline isOnline={this.changeStatus} />;
    }
    return <div className='status'>{html}</div>;
  }
}

export default Status;
