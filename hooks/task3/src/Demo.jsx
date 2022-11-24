import React from 'react';

const Demo = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <div>
        <button className='btn' onClick={() => setIsVisible(true)}>
          Show
        </button>
        <button className='btn' onClick={() => setIsVisible(false)}>
          Hide
        </button>
      </div>
      {isVisible && <Dimensions />}
    </div>
  );
};

export default Demo;
