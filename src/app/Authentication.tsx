"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  
import axios from 'axios';


const withAuth = (Component: any) => {
    const router = useRouter();
    const [data, setData] = useState();

    useEffect(() => {

    var details = localStorage.getItem("userDetails");
     axios.get(`http://192.168.1.48:8080/onlinelearning/login-status/${details}`).then((response)=>{
        setData(response.data);
     }).catch(()=>{
        router.push('/login');
     });
    
},[]);

return(props)=>{

if(!!data) return <Component {...props}/>

else return null;
}
};

export default withAuth;

