/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { MdOutlineStarRate } from "react-icons/md";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookName, author, image, rating, tags, bookId } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="mx-auto">
                <div className="card   shadow-xl py-3">


                    <figure>
                        <img className="rounded-xl w-[300px] h-[300px]"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">

                        <div className="flex justify-between">
                            {
                                tags.map((tag, index) => <button key={index} className="border border-lime-400 px-3 rounded-[5px] hover:bg-purple-600 font-bold">{tag}</button>)
                            }
                        </div>

                        {/* <h2 className="">{tags}</h2> */}
                        <p className="font-bold">{bookName}</p>
                        <p className="font-bold text-lime-400">By: {author}</p>
                        <div className="border border-dashed border-gray-500">

                        </div>
                        <div className="flex gap-[80px] font-bold">
                            <button>Fiction</button>
                            <p className="flex gap-3 items-center">{rating}<MdOutlineStarRate></MdOutlineStarRate></p>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;