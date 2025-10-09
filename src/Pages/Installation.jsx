import { IoIosArrowDropdown } from "react-icons/io";
import { getItemsFLS } from "../../public/localStorage";
import useApps from "../Hooks/useApps";
import InstalledApp from "./InstalledApp";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import logo from '../assets/logo.png'

const Installation = () => {
  const installedAppsID = getItemsFLS()
  const { apps } = useApps()

  const installedApps = apps.filter((app) => installedAppsID.includes(app.id))

  const [installedList, setInstalledList] = useState(installedApps)
  const [delayOver, setDelayOver] = useState(false)
  const [sortOrder, setSortOrder] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setDelayOver(true), 300)
    return () => clearTimeout(timer)
  }, [])

  if (!delayOver) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex text-6xl items-center justify-center">
          L <img src={logo} className="w-8 h-8 animate-spin" alt="loading..."/> A D I N G
        </div>
      </div>
    )
  }

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads
    if (sortOrder === "low-high") return a.downloads - b.downloads
    return 0;
  })

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-9/10 mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold">Your Installed Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <h1 className="text-2xl font-bold">
            {installedApps.length} Apps Installed
          </h1>

          <div className="dropdown">
            <button tabIndex={0} role="button" className="btn m-1">
              Sort by Download <IoIosArrowDropdown />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => setSortOrder("high-low")}>High-Low</a>
              </li>
              <li>
                <a onClick={() => setSortOrder("low-high")}>Low-High</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          {sortedApps.map((app) => (
            <InstalledApp key={app.id} app={app} setInstalledList={setInstalledList}/>
          ))}
        </div>
      </div>

      <ToastContainer
        position="top-center"/>
    </div>
  );
};

export default Installation;