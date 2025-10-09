import { FaDownload, FaStar } from "react-icons/fa";
import {  getItemsFLS, removeItemFLS, } from "../../public/localStorage";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InstalledApp = ({ app,setInstalledList }) => {
    const { id,image, title, downloads, ratingAvg,size } = app

    const preIds = getItemsFLS()

    const handleUninstall = (id) =>{
      removeItemFLS(id)
      const changedInstalled = preIds.filter(preId=>preId!==id)
      setInstalledList(changedInstalled)
      toast.success('Uninstalled the App!')
    }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 bg-white p-4 rounded-sm mt-2">
      {
        <div className="flex items-center gap-5">
          <figure className="w-20 bg-gray-200 p-2">
            <img src={image} alt="" />
          </figure>
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex  gap-5">
              <div className="flex gap-1 items-center font-bold text-green-500">
                <FaDownload />
                <h2>{downloads}M</h2>
              </div>
              <div className="flex gap-1 items-center font-bold text-orange-500">
                <FaStar />
                <h2>{ratingAvg}</h2>
              </div>
            <h2>{size}MB</h2>
            </div>
          </div>
        </div>
      }
      <button onClick={()=>handleUninstall(id)} className="btn bg-green-500 text-2xl text-white">
        Uninstall</button>
    </div>
    </div>
  );
};

export default InstalledApp;
