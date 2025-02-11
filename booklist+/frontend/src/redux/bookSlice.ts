import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  progress: number;
}

interface BookState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('http://127.0.0.1:5000/api/books');
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (newBook: Omit<Book, 'id'>) => {
  const response = await axios.post('http://127.0.0.1:5000/api/books', newBook, { headers: {
    'Content-Type': 'application/json',
}});
  return response.data;
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id: number) => {
  await axios.delete(`http://127.0.0.1:5000/api/books/${id}`);
  return id;
});

export const editBook = createAsyncThunk('books/editBook', async (editedBook: Book) => {
  const response = await axios.put(`http://127.0.0.1:5000/api/books/${editedBook.id}`, editedBook);
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch books';
      })

      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })

      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      })

      .addCase(editBook.fulfilled, (state, action) => {
        const index = state.books.findIndex((book) => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      });
  },
});

export default bookSlice.reducer;
