import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(window.navigator.onLine);

    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    return () => {
      window.removeEventListener('online', () => setIsOnline(true));
      window.removeEventListener('offline', () => setIsOnline(false));
    };
  }, []);

  console.log(isOnline);
  const offlineClass = classNames('status', { status_offline: !isOnline });
  const text = isOnline ? 'online' : 'offline';

  return <div className={offlineClass}>{text}</div>;
};

export default ConnectionStatus;
