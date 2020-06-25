import React from 'react';
import './App.css';

import Flag from './Flag';
import FlagPureCss from './FlagPureCss';
import FlagSvg from './FlagSvg';
import FlagAnimatedSvg from './FlagAnimatedSvg';
import FlagSimpleAnimation from './FlagSimpleAnimation';

function App() {
  return (
    <div className="App">
      {/* <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
        <Flag height={300} />
        <FlagPureCss height={300} />
      </div> */}

      <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
        <FlagSimpleAnimation height={300} />
      </div>

      <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
        {/* <FlagSvg height={300} /> */}
        <FlagAnimatedSvg height={300} />
      </div>
    </div>
  );
}

export default App;
