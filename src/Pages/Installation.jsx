import { IoIosArrowDropdown } from "react-icons/io";
import { getItemsFLS } from "../../public/localStorage";
import useApps from "../Hooks/useApps";
import InstalledApp from "./InstalledApp";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const Installation = () => {
  const installedAppsID = getItemsFLS();
  const { apps } = useApps();

  const installedApps = apps.filter((app) => installedAppsID.includes(app.id))

  const [delayOver, setDelayOver] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setDelayOver(true), 300)
    return () => clearTimeout(timer)
  }, [])

  if (!delayOver){
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <img src="../../src/assets/logo.png" className="w-30 animate-spin"></img>
      </div>
    )
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
              <li><a>High-Low</a></li>
              <li><a>Low-High</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          {installedApps.map((app) => (
            <InstalledApp key={app.id} app={app}/>
          ))}
        </div>
      </div>

    <ToastContainer/>
    </div>
  );
};

export default Installation;
