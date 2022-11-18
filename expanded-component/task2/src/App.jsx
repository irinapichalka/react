import React from 'react';
import Dialog from './Dialog';

class App extends React.Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <div className='app'>
        <button className='btn' onClick={this.showDialog}>
          Show
        </button>
        <Dialog
          onClose={this.hideDialog}
          isOpen={this.state.isOpen}
          title='some title'
        >
          <p>Some text</p>
        </Dialog>
      </div>
    );
  }
}

export default App;
