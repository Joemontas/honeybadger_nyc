import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import PizzaMaker from './containers/PizzaMaker/PizzaMaker';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <PizzaMaker />
        </Layout>
      </div>
    );
  }
}

export default App;