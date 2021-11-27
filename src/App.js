import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './Page/Home';
import Booklist from './Page/Booklist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
          {/* <Route path="/edit/:id" component={editStudent} /> */}
        <Route path="/list" element={<Booklist/>} />
      </Routes>
  </Router>
  );
}

export default App;
