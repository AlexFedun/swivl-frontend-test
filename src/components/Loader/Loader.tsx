import React from 'react';
import './Loader.sass';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="animation">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;