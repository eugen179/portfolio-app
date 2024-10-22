// src/components/BookItem.js
import React from 'react';

const BookItem = ({ title, author, year }) => {
    return (
        <div className="book-item">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
        </div>
    );
};

export default BookItem;
