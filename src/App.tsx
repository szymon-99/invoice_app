import './index.css';
import Layout from './layout';
import { Route, Switch, useLocation } from 'react-router-dom';
import { HomePage, InvoicePage, NotFound } from './pages';
import { useEffect } from 'react';
import { useActions } from './hooks';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { getInvoices } = useActions();
  const location = useLocation();

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/invoices/:id'>
            <InvoicePage />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
