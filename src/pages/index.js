import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './home';
import About from './about';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Layout>
    </Router>
  );
};

export default Pages;
