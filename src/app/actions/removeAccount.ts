import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function removeacc(Email:any){
  const router = useRouter();
    axios({
        method: 'delete',
        url: `http://192.168.1.48:8080/onlinelearning/register/${Email}`,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
      })
        .then((response) => {

          console.log(response.data);
          alert(response.data);
          router.push('/');
        })
        .catch((error) => {
          console.error('Error:', error);    
          if (error.response) {
            alert(error.response.data);
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
          }     
      }); 

}