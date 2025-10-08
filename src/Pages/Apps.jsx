import React from 'react';
import useApps from '../Hooks/useApps';
import App from './App';
import { Link } from 'react-router';

const Apps = () => {
    const { apps, loading, error } = useApps();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

    return (
        <div className="py-10">
      <div className="text-center mb-5">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-9/10 mx-auto">
        {apps.map(app=><App key={app.id} app={app}/>)}
      </div>
      <div className="flex justify-center items-center">
      </div>
    </div>
    );
};

export default Apps;