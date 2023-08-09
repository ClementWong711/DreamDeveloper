import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
    
            if(response.ok){
                setData(json)
            }
        }
    
        fetchData()
    }, [url]);
    return data;
};
export default useFetch;