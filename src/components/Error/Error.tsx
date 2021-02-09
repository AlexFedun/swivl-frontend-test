import React from 'react';
import './Error.sass';

export interface ErrorProps {
  message: string | null;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="error">
      <div>Error</div>
      <div>{message}</div>
    </div>
  );
};

export default Error;