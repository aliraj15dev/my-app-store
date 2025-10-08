import { useState } from "react";
import useApps from "../Hooks/useApps";
import App from "./App";

const Apps = () => {
    const [searchValue, setSearchValue] = useState("")
    const strSearchValue = searchValue.trim().toLowerCase()

    const { apps, loading, error } = useApps();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    const searchedApp = strSearchValue ? apps.filter(app=>app.title.toLowerCase().includes(strSearchValue)):apps


  return (
    <div className="py-10 bg-gray-100">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">Our All Applications</h2>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="max-w-9/10 mx-auto space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-3">
            <h1 className="text-2xl font-bold">({searchedApp.length}) Apps Found</h1>

            <input onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} type="search" placeholder="Search Apps" className="border-1 p-2 border-gray-400 rounded-sm hover:scale-105"/>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {searchedApp.map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Apps;
