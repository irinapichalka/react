import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnline: props.isOnline,
    };
  }

  render() {
    let html;

    if (this.state.isOnline) {
      html = <Online />;
    } else {
      html = <Offline />;
    }
    return <div className='status'>{html}</div>;
  }
}

export default Status;
