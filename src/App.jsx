import React, { useState } from 'react';
import InspireInkPortfolio from './InspireInkPortfolio';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <InspireInkPortfolio darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}

export default App;