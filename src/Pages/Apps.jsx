import { useEffect, useRef, useState } from "react";
import useApps from "../Hooks/useApps";
import App from "./App";
import NoAppsFound from "./NoAppsFound";
import logo from '../assets/logo.png'

const Apps = () => {
  const [searchValue, setSearchValue] = useState("")
  const strSearchValue = searchValue.trim().toLowerCase()
  const { apps } = useApps()

  const inputRef = useRef(null)

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false)
      }, 200)
      return () => clearTimeout(timer)
    } else {
      setLoading(false)
    }
  }, [searchValue])

  const [delayOver, setDelayOver] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setDelayOver(true), 300)
    return () => clearTimeout(timer)
  }, [])


  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus()
    }
  }, [loading])

  if (!delayOver) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex text-6xl items-center">
          L <img src={logo} className="w-8 h-8 animate-spin" alt="loading..."/> A D I N G
        </div>
      </div>
    )
  }

  const searchedApp = strSearchValue
    ? apps.filter((app) =>
        app.title.toLowerCase().includes(strSearchValue)
      )
    : apps

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex text-6xl items-center">
          L <img src={logo} className="w-8 h-8 animate-spin" alt="loading..."/> A D I N G
        </div>
      </div>
    )
  }

  return (
    <div className="py-10 bg-gray-100">
      {searchedApp.length === 0 || (
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold">Our All Applications</h2>
          <p>
            Explore All Apps on the Market developed by us. We code for
            Millions
          </p>
        </div>
      )}

      {searchedApp.length === 0 ? (
        <NoAppsFound />
      ) : (
        <div className="max-w-9/10 mx-auto space-y-4 mt-20">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <h1 className="text-2xl font-bold">
              ({searchedApp.length}) Apps Found
            </h1>

            <input
              ref={inputRef}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              type="search"
              placeholder="Search Apps"
              className="border-1 p-2 border-gray-400 rounded-sm hover:scale-105"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
            {searchedApp.map((app) => (
              <App key={app.id} app={app} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
