import { IoIosArrowDropdown } from "react-icons/io";
import { getItemsFLS } from "../../public/localStorage";
import useApps from "../Hooks/useApps";
import InstalledApp from "./InstalledApp";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Installation = () => {
  const installedAppsID = getItemsFLS();

  const [installed, setInstalled] = useState(installedAppsID)

  const { apps } = useApps();


  const installedApps = apps.filter((app) => installed.includes(app.id))

    // const booksId = JSON.parse(installedAppsID)
    // const myList = apps.filter(app=>installedAppsID.includes(app.id))

  const  [installedList, setInstalledList] = useState(installedApps)

  const handleSort=(type)=>{
      if(type==="High-Low"){
        const sortedByHighTLow = [...installed].sort((a,b)=>a.downloads-b.downloads)
        setInstalledList(sortedByHighTLow)
        console.log(sortedByHighTLow)
        return
      }
      if(type==="Low-High"){
        const sortedByLowTHigh = [...installedList].sort((a,b)=>b.downloads-a.downloads)
        setInstalledList(sortedByLowTHigh)
        console.log(sortedByLowTHigh)
      }
  }


  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-9/10 mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold">Your Installed Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <h1 className="text-2xl font-bold">{installedApps.length} Apps Installed</h1>

          <div className="dropdown">
            <button tabIndex={0} role="button" className="btn m-1">
              Sort by Download <IoIosArrowDropdown />
            </button>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" >
              <li><a onClick={()=>handleSort("High-Low")}>High-Low</a></li>
              <li><a onClick={()=>handleSort("Low-High")}>Low-High</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          {installedApps.map((app) => (
            <InstalledApp key={app.id} app={app} setInstalled={setInstalled}/>
          ))}
        </div>
      </div>

    <ToastContainer/>
    </div>
  );
};

export default Installation;
