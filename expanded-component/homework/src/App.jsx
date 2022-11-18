import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isIconDown: true,
  };

  onChangeState = () => {
    console.log(this.state.isIconDown);
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
          onChangeState={this.onChangeState}
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
