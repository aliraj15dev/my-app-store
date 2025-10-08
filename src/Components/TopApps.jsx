import { useNavigate } from "react-router";
import useApps from "../Hooks/useApps";
import TrendingApp from "./TrendingApp";

const TopApps = () => {
  const { apps} = useApps();
  const demoApps = apps.slice(0, 8);

  const navigate = useNavigate()

  const handleNavigate=()=>{
    navigate('apps')
  }

  return (
    <div>
      <div className="py-10">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-9/10 mx-auto">
        {demoApps.map(app=><TrendingApp key={app.id} app={app}/>)}
      </div>

      <div className="flex justify-center items-center">
        <button onClick={handleNavigate} className="btn mt-5 bg-gradient-to-r from-blue-700 to-violet-600 text-white hover:scale-120 duration-1000">Show All</button>
      </div>
    </div>
    </div>
  );
};

export default TopApps;
