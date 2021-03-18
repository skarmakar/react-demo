import React, { useState } from 'react'
import Layout from './components/Layout/Layout'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

// this is a stateful component
function App() {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
