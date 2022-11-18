import React from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';

class App extends React.Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='app'>
        <EvenNumbers title='Even number' number={this.state.number} />;
        <Numbers title='All numbers' number={this.state.number} />;
        <OddNumbers title='Odd number' number={this.state.number} />;
      </div>
    );
  }
}

export default App;
