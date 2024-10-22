// src/components/BookList.js
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <BookItem 
                            title={book.title} 
                            author={book.author} 
                            year={book.year} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
