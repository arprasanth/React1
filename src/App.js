import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />

        <Route path="/Login" exact render={(props) => {
          <Login />
        }} />


        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
