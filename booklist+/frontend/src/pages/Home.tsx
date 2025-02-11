import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchBooks, addBook, deleteBook, editBook } from '../redux/bookSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { books, loading, error } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = (newBook: { title: string; author: string; genre: string; rating: number; progress: number }) => {
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (id: number) => {
    dispatch(deleteBook(id));
  };

  const handleEditBook = (id: number) => {
    const editedBook = books.find(book => book.id === id);
    if (editedBook) {
      dispatch(editBook(editedBook));
    }
  };

  return (
    <div className="container">
      <h1>My Book List</h1>
      <AddBookForm onAdd={handleAddBook} />
      {loading && <p>Loading books...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook} />}
    </div>
  );
};

export default Home;
