import React from 'react';
import {ThemeProvider} from 'styled-components';

// import FlatListExample from './FlatListExample';
import RecyclerListExample from './RecyclerListExample';

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <RecyclerListExample />
    </ThemeProvider>
  );
}
