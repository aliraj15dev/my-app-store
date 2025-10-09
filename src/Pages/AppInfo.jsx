import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { Bar, BarChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setItemTLS } from "../../public/localStorage";
import downloadIcon from '../assets/icons/download.png'
import ratingIcon from '../assets/icons/rating.png'
import reviewIcon from '../assets/icons/review.png'

const AppInfo = () => {
  const [click, setClick] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const { Id } = useParams();
  const appId = Number(Id);

  const appsData = useApps();
  const { apps } = appsData;

  const app = apps.find((app) => app.id === appId);

  if (!app) {
    return <div>Product Not Found or Loading...</div>;
  }

  const { id, image, title, companyName, downloads, ratingAvg, reviews, ratings,description,size } =
    app;
  const sortedRatings = [...ratings].sort((a, b) => b.name.localeCompare(a.name));


  const handleInstall=(id)=>{
    setClick(true)
    setIsDisable(true)
    toast.success('Successfully Installed!')

    setItemTLS(id)
  }



  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-9/10 mx-auto">
      <h1 className="text-4xl font-semibold">App Details</h1>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 my-5 border-b-2 border-gray-200 pb-5">
        <figure className="shadow-md flex justify-center items-center py-3">
          <img
            className="w-full h-full"
            src={image}
            alt="App Image"
            style={{ width: "200px" }}
          />
        </figure>
        <div className="space-y-5 w-full">
          <div className="space-y-2 border-b-2 border-gray-200 pb-3">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>
              {" "}
              Developed by{" "}
              <span className="text-violet-500 font-bold">{companyName}</span>
            </p>
          </div>

          <div className="flex gap-10 items-center">
            <div>
              <img
                src={downloadIcon}
                alt="Download Icon"
              />
              <p>Downloads</p>
              <h4 className="text-4xl font-black">{downloads}</h4>
            </div>
            <div>
              <img src={ratingIcon} alt="Rating Icon" />
              <p>Average Rating</p>
              <h4 className="text-4xl font-black">{ratingAvg}</h4>
            </div>
            <div>
              <img src={reviewIcon} alt="Review Icon" />
              <p>Total Reviews</p>
              <h4 className="text-4xl font-black">{reviews}</h4>
            </div>
          </div>
          <button onClick={()=>handleInstall(id)} disabled={isDisable} className={`btn bg-green-500 text-white text-xl`}>
            {click?"Installed":`Install Now (${size}MB)`} </button>
        </div>
      </div>

      <div>
        {
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
            layout="vertical"
              data={sortedRatings}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>

              <XAxis type="number"/>
              <YAxis dataKey="name" type="category"/>
              <Tooltip />
              <Bar
                dataKey="count"
                fill="orange"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
            </BarChart>
          </ResponsiveContainer>
        }
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">Description</h3>
        <p>{description}</p>
      </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AppInfo;
