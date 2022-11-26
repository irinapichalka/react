import React, { useState, useEffect } from 'react';
import Clock from './Clock';

const App = () => {
  const [isVisible, toggleIsVisible] = useState(true);
  return (
    <>
      <button onClick={() => toggleIsVisible(!isVisible)}>Toggle</button>
      <div>
        {isVisible && (
          <>
            <Clock location='London' offset={0} />
            <Clock location='Kyiv' offset={2} />
            <Clock location='New York' offset={-5} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
