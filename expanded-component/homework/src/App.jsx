import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    toShow: false,
  };

  onChangeState = () => {
    console.log(this.state.toShow);
    if (this.state.toShow) {
      this.setState({
        toShow: false,
      });
    } else {
      this.setState({
        toShow: true,
      });
    }
  };

  render() {
    return (
      <div className='app'>
        <Expand
          title='Some text'
          onChangeState={this.onChangeState}
          toShow={this.state.toShow}
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
