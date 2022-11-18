import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ children, title, onChangeState, toShow }) => {
  const classForIcon = toShow ? 'fa-chevron-up' : 'fa-chevron-down';
  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <button className='expand__toggle-btn' onClick={onChangeState}>
          <i className={`fas ${classForIcon}`}></i>
        </button>
      </div>
      <div
        className='expand__content'
        style={{ display: toShow ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
};

Expand.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;
