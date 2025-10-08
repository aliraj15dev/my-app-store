import 'react-toastify/dist/ReactToastify.css';

const getItemsFLS = () =>{
    const allAppsId = localStorage.getItem("wishlist")

    if(allAppsId){
        const appsId = JSON.parse(allAppsId)
        return appsId;
    }
    else{
        return [];
    }
}

const setItem = (id) =>{
    const appsId = getItemsFLS()

    if(appsId.includes(id)){
        return;
    }
    else{
        appsId.push(id)
        const strApps = JSON.stringify(appsId)
        localStorage.setItem("wishlist", strApps)
    }
}

export {setItem, getItemsFLS}