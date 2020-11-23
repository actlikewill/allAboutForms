import React from 'react';
import RegForm from './Pages/RegistrationForm';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>    
      <Route path="/register"><RegForm /></Route>
    
    </BrowserRouter>
  );
}

export default App;
