import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    toShow: false,
  };

  onChangeState = () => {
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
    const classForIcon = this.state.toShow
      ? 'fa-chevron-up'
      : 'fa-chevron-down';
    const { title, children } = this.props;

    return (
      <div className='expand border'>
        <div className='expand__header'>
          <span className='expand__title'>{title}</span>
          <button className='expand__toggle-btn' onClick={this.onChangeState}>
            <i className={`fas ${classForIcon}`}></i>
          </button>
        </div>
        <div
          className='expand__content'
          style={{ display: this.state.toShow ? 'block' : 'none' }}
        >
          {children}
        </div>
      </div>
    );
  }
}

Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;
