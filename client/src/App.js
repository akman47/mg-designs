import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  const [currentPage, handlePageChange] = useState('Home');

  return (
    <ApolloProvider client={client}>
    <Router>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
    </ApolloProvider>
  );
}

export default App;