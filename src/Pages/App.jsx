import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const App = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <div className="hover:scale-105 duration-700 shadow-sm border-2 border-gray-300 bg-white rounded-lg p-5">
      <Link to={`/apps/${id}`} className="space-y-3">
        <figure className="bg-gray-200 p-5 rounded-lg flex justify-center items-center">
          <img
            className="rounded-xl"
            src={image}
            alt="App Image"
          />
        </figure>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center font-bold p-2 text-green-500 bg-green-200 rounded-lg">
            <FaDownload />
            <h2>{downloads}M</h2>
          </div>
          <div className="flex gap-1 items-center font-bold text-orange-500 bg-orange-200 p-2 rounded-lg">
            <FaStar />
            <h2>{ratingAvg}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default App;
