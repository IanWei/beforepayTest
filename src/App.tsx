import React from 'react';
import { GlobalStyle } from './globalStyles';
import { Register } from './feature/register/components/Register';

function App() {
  return (
    <>
      <GlobalStyle />
      <Register />
    </>
  );
}

export default App;
