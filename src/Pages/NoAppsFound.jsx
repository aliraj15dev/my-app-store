import { useNavigate } from 'react-router';
import noAppError from '../assets/App-Error.png'

const NoAppsFound = () => {
    const navigate = useNavigate()
    const handleGoHome = () => {
        navigate('/apps')
        window.location.reload()
    }

    return (
        <div>
            <div className='max-w-9/10 mx-auto flex flex-col justify-center items-center py-20 space-y-3'>
                <img className='w-60' src={noAppError} alt="" />
                <h2 className='text-3xl font-bold'>OOPS!! APP NOT FOUND</h2>
                <p>The App you are requesting is not found on our system.  please try another apps</p>
                <button onClick={handleGoHome} className='btn bg-gradient-to-r from-blue-600 to-violet-500 text-white'>Show All Apps</button>
            </div>
        </div>
    );
};

export default NoAppsFound;