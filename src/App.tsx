import React from 'react';
import './App.sass';

interface IAppProps {
  children: React.ReactElement;
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className="App">
      {props.children}
    </div>
  );
};

export default App;
