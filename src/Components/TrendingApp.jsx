import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TrendingApp = ({app}) => {

    const {id,image,title,downloads,ratingAvg} = app

    return (
        <div>
            <Link to={`/apps/${id}`}>
                <div className="shadow-xl border-2 border-gray-300 p-5 space-y-3 rounded-xl hover:scale-110 duration-1000 w-60 mx-auto sm:w-auto">
                <figure className='flex justify-center items-center'>
                    <img className='w-60 h-40 p-5 bg-gray-200 rounded-lg' src={image} alt="App Image" />
                </figure>
                    <h2 className='text-3xl font-bold'>{title}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center font-bold p-2 text-green-500 bg-green-200 rounded-lg'>

                        <FaDownload/><h2>{downloads}M</h2>
                    </div>
                    <div className='flex gap-1 items-center font-bold text-orange-500 bg-orange-200 p-2 rounded-lg'>
                        <FaStar/><h2>{ratingAvg}</h2>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default TrendingApp;