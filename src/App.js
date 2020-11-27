import React from 'react';
import Pages from './Pages';
import Nav from './Components/Nav';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />   
      <Route path="/register"><Pages.RegistrationForm /></Route>    
      <Route path="/checkout"><Pages.CheckoutForm /></Route>    
    </BrowserRouter>
  );
}

export default App;
