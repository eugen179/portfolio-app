// src/App.js
import React from 'react';
import BookList from './Components/BookList';
import './App.css'; // Optional: Add some CSS styling

const App = () => {
    const books = [
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { title: '1984', author: 'George Orwell', year: 1949 },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
    ];

    return (
        <div>
            <h1>My Book Collection</h1>
            <BookList books={books} />
        </div>
    );
};

export default App;
