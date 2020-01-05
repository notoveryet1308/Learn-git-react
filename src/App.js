import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import ProductPreview from './components/preview-product/productpreview.component';

const HatsPage = () =>(
   <div>
      <h1>Hats Page</h1>
   </div>
);

function App() {
  return (
    <div className="App">
        
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/shop" component={ShopPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
