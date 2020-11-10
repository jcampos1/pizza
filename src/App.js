import logo from './logo.svg';
import React, { Suspense } from 'react'
import Loading from './components/Loading/index';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './assets/sass/theme.scss';
import './assets/sass/components.scss';

const Login = React.lazy(() => import('./views/Login'));
const StoreList = React.lazy(() => import('./views/StoreList'));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/stores" component={StoreList} />
        <Route exact path="/stores/:storeId" component={StoreList} />
      </Router>
    </Suspense>
  );
}

export default App;
