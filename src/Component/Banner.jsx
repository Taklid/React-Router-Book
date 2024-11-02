import profile from '../assets/1_42ebJizcUtZBNIZPmmMZ5Q.jpg'

const Banner = () => {
    return (
        <div>
            <div className='lg:flex mx-auto py-4 justify-center  items-center gap-48'>
            {/* preant area */}
            <div className=' text-center'>
                <p className='text-[40px] font-bold'>Books to freshen <br />up your bookshelf</p>
                <button className='bg-lime-500 px-3 py-3 rounded-lg text-yellow-200'>View The List</button>
            </div>
           
            <div>
                <img className='mt-3 mx-auto lg:w-[300px] rounded-xl lg:h-[250px] h-[200px] w-[300px]' src={profile} alt="" />
            </div>
           </div>
            
        </div>
    );
};

export default Banner;