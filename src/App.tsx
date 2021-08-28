import './index.css';
import Layout from './layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, InvoicePage, NotFound } from './pages';
import { useEffect } from 'react';

function App() {
  useEffect(() => {}, []);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/invoice/:id'>
            <InvoicePage />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
