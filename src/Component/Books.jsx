
import { useEffect, useState } from "react";
import Book from "./Book";




const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    }, [])
    
    return (
        <div>
            <h2 className="text-center">Books</h2>
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 grid-cols-1">
            {
                books.map( book => <Book key={book.bookId} book={book}></Book>)
            }
            </div>
            
            
        </div>
    );
};

export default Books;