import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const { bookId } = useParams()

    const data = useLoaderData()
    const id = parseInt(bookId)
    const book = data.find(book => book.bookId === id)
    console.log(book);
    const { image, tags, yearOfPublishing, review, rating, totalPages, publisher, bookName, author, category } = book;
    return (
        <div className="card   shadow-xl py-3">
            <h3>Book Details {bookId}</h3>
            <div className="lg:flex gap-10 mx-auto bg-yellow-600 py-4 px-3 rounded-[5px]">
                <div>
                    <img className="rounded-xl w-[300px] h-[300px]" src={image} alt="" />
                </div>
                <div className="font-bold">
                    <p>{bookName}</p>
                    <p>By: {author}</p>
                    <p>{category}</p>
                    <p className="lg:w-[400px] w-[350px]">Review: {review}</p>
                    <div>
                        {
                            tags.map((tag, index) => <button key={index} className="border border-lime-400 px-3 rounded-[5px] hover:bg-purple-600 font-bold">{tag}</button>)
                        }
                    </div>

                    <div className="border border-dashed border-gray-500 mt-3">

                    </div>

                    <p>Number of Pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>

                    
                    <button className=" bg-slate-500 mr-3 px-3 rounded-[5px] ">Read</button>
                    <button className="bg-gray-500 px-3 rounded-[5px]">Wishlist</button>
                    

                </div>
            </div>
        </div>
    );
};

export default BookDetails;