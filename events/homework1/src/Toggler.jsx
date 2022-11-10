import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Off',
    };

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    if (this.state.text === 'Off') {
      this.setState({
        text: 'On',
      });
    } else {
      this.setState({
        text: 'Off',
      });
    }
  }

  render() {
    return (
      <button className='toggler' onClick={this.changeState}>
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;
