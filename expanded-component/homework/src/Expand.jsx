import React from 'react';
import PropTypes from 'prop-types';

class Expand extends React.Component {
  state = {
    toShow: false,
  };

  onChangeState = () => {
    this.setState({
      toShow: !this.state.toShow,
    });
  };
  render() {
    const classForIcon = this.state.toShow
      ? 'fa-chevron-up'
      : 'fa-chevron-down';

    const { title, children } = this.props;
    const content = this.state.toShow ? (
      <div className='expand__content'>{children}</div>
    ) : (
      ''
    );

    return (
      <div className='expand border'>
        <div className='expand__header'>
          <span className='expand__title'>{title}</span>
          <button className='expand__toggle-btn' onClick={this.onChangeState}>
            <i className={`fas ${classForIcon}`}></i>
          </button>
        </div>
        {content}
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
