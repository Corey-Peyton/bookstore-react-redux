import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/Booksform';

function App() {
  return (
    <div className="App">
      <BooksList />
      <div className="container-fluid">
        <h1>ADD A NEW BOOK</h1>
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
