import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './Page/Home';
import Book from './Page/Book';
import BookListPage from './Page/BookListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/book/:id" element={<Book/>} />
        <Route path="/type/:typeId/:pageNum" element={<BookListPage/>} />
        <Route path="/search/:pageNum" element={<BookListPage/>} />
      </Routes>
  </Router>
  );
}

export default App;
