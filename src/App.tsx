import React from 'react';

import './App.css';
import NavBar from './Navbar/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Popularsubject } from './Components/Popularsubject';
import { Feedback } from './Components/Feedback';

import { Portfolio } from './Components/Portfolio';


function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Footer/> */}
      <Portfolio/>
      <Popularsubject/>
      <Feedback/>

    </div>
  );
}

export default App;
