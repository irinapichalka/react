import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }
  showName = (color) => {
    this.setState({
      text: color,
    });
  };
  hideName = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        <div className='picker__title'>{this.state.text}</div>
        <div>
          <button
            className='picker__button picker__button_coral'
            onMouseEnter={() => this.showName('Coral')}
            onMouseLeave={() => this.hideName()}
          ></button>
          <button
            className='picker__button picker__button_aqua'
            onMouseEnter={() => this.showName('Aqua')}
            onMouseLeave={() => this.hideName()}
          ></button>
          <button
            className='picker__button picker__button_bisque'
            onMouseEnter={() => this.showName('Bisque')}
            onMouseLeave={() => this.hideName()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
