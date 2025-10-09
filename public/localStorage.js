import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getItemsFLS = () =>{
    const allAppsId = localStorage.getItem("installed")

    if(allAppsId){
        const appsId = JSON.parse(allAppsId)
        return appsId;
    }
    else{
        return [];
    }
}

const setItemTLS = (id) =>{
    const appsId = getItemsFLS()

    if(appsId.includes(id)){
        toast.info("Already Installed")
        return;
    }
    else{
        appsId.push(id)
        const strApps = JSON.stringify(appsId)
        localStorage.setItem("installed", strApps)
        toast.success('Successfully Installed!')
    }
}


const removeItemFLS = (id) =>{
    const appsId = getItemsFLS()
    const updatedId = appsId.filter(appId=>appId!==id)

    localStorage.setItem("installed", JSON.stringify(updatedId))
}

export {setItemTLS, getItemsFLS, removeItemFLS}