import { useEffect, useState } from 'react';

const useServices = () => {
    const [services,setServices]=useState([]);
  useEffect(()=>{
    fetch('https://arcane-savannah-53460.herokuapp.com/food')
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[])
    return [services,setServices]
};

export default useServices;