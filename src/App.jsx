import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen1 from './Page/Homescreen1';
import Homescreen2 from './Page/Homescreen2';
import Homescreen3 from './Page/Homescreen3';

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen1 />} />
        <Route path="/home2" element={<Homescreen2 />} />
        <Route path="/home3" element={<Homescreen3 />} />
      </Routes>
    </Router>
  )

}
export default App;