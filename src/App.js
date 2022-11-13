import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

import Header from './containers/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:productId" exact component={ProductDetails}/>
      <Route>404 not found</Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
