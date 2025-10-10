import axios from "axios"
import { useEffect, useState } from "react"

const useApps = () =>{

    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios.get('/appsData.json')
        .then(data=>setApps(data.data))
        .catch(error=>setError(error))
        .finally(()=>{
            const timer = setTimeout(() => setLoading(false), 300)
            return () => clearTimeout(timer)
        })

    },[])

    return {apps, loading, error}
}

export default useApps;