import { NavLink } from "react-router-dom";



const Navber = () => {
    return (
        <div className="lg:flex justify-between mt-5 text-center">
            <div className="text-black font-bold">
                <p className="">Book Vibe</p>
            </div>
            <div className="lg:flex font-bold text-gray-500 gap-2">
                <p className="border w-[100px]  mx-auto border-lime-400 rounded-[5px] px-2 hover:bg-lime-300"><NavLink to='/'>Home</NavLink></p>
                <p>Listed Books</p>
                <p>Pages to Read</p>
            </div>
            <div className="flex gap-2 ml-40">
                <button className="bg-lime-500 px-3 rounded-[5px]">Sing In</button>
                <button className="bg-sky-500 px-3 rounded-[5px]">Sing Up</button>
            </div>
        </div>
    );
};

export default Navber;