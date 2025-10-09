import { useNavigate } from 'react-router';

const ErrorPage = () => {

    const navigate = useNavigate()
    const handleBackPage =()=>{
        navigate(-1)
    }

    return(
        <div className='bg-gray-100'>
            <div className='max-w-9/10 mx-auto flex flex-col justify-center items-center py-20'>
                <img className='w-60' src="../../src/assets/error-404.png" alt="" />
                <h2 className='text-3xl font-bold'>Oops, Page not Found</h2>
                <p>The page you are looking for is not available.</p>
                <button onClick={handleBackPage} className='btn bg-gradient-to-r from-blue-600 to-violet-500 text-white'>Go Back</button>
            </div>
        </div>
    )
};

export default ErrorPage;