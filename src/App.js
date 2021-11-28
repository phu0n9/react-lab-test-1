import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './Page/Home';
import Book from './Page/Book';
import BookListPage from './Page/BookListPage';
import UpdateItem from './Api/UpdateItem';
import CreateBook from './Page/CreateBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/book/:id" element={<Book/>} />
        <Route path="/type/:typeId/:pageNum" element={<BookListPage/>} />
        <Route path="/search/:pageNum" element={<BookListPage/>} />
        <Route path="/update/:id" element={<UpdateItem/>} />
        <Route path="/create" exact element={<CreateBook/>} />
      </Routes>
  </Router>
  );
}

export default App;
