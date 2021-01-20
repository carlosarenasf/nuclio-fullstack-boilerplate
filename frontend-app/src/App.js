import React from 'react';
import Home from './pages/home/home.view';
import { ExampleContextProvider } from './context/contextProvider';
import Count from './components/count/count.view';
import CountButton from './components/countButton/countButton.view';
import CountResetButton from './components/countResetButton/countResetButton.view';

function App() {
  return (
    <ExampleContextProvider>
      <Home />
    </ExampleContextProvider>
  );
}

export default App;
