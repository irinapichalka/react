import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isIconDown: true,
  };

  hideContent = () => {
    this.setState({
      isIconDown: true,
    });
  };

  onChangeState = () => {
    if (this.state.isIconDown) {
      this.setState({
        isIconDown: false,
      });
    } else {
      this.setState({
        isIconDown: true,
      });
    }
  };

  render() {
    return (
      <div className='app'>
        <Expand
          title='Some text'
          changeContent={this.onChangeState}
          isIconDown={this.state.isIconDown}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
