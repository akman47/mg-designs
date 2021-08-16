import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Founder from './pages/Founder';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  return (
    <Router>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/founder" component={Founder} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
