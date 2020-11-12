import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import './assets/sass/components.scss';
import './assets/sass/object.scss';
import './assets/sass/theme.scss';
import './assets/sass/utilities.scss';
import "animate.css";
import "hover.css";
import Loading from './components/Loading/index';
import { PizzaProvider, usePizza } from './context/PizzaContext';

// Lazy load
const Login = React.lazy(() => import('./views/Login'));
const StoreList = React.lazy(() => import('./views/StoreList'));
const StoreDetail = React.lazy(() => import('./views/StoreDetail'));

const Routes = () => {
  const { isLoggedin } = usePizza();
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Route exact path="/" component={Login} />
        {
          isLoggedin && (
            <>
              <Route exact path="/stores" component={StoreList} />
              <Route exact path="/stores/:storeId" component={StoreDetail} />
            </>
          )
        }
      </Router>
    </Suspense>
  )
}

function App() {
  return (
    <PizzaProvider>
      <Routes />
    </PizzaProvider>
  );
}

export default App;
