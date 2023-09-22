import axios from "axios";



export const getStates = async()=>{ 

    return axios({
     method: 'get',
     url: 'http://192.168.1.48:8080/onlinelearning/states',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     timeout: 5000, 
   })
     .then((response) => {

       console.log(response.data);
       return response.data;
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

export const getCountry = async()=>{ 

    return axios({
     method: 'get',
     url: 'http://192.168.1.48:8080/onlinelearning/country',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     timeout: 5000, 
   })
     .then((response) => {

       console.log(response.data);
       return response.data;
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

export const saveAddress = async(data: { DoorNo:String, Street:String,City:String,State:String,Country:String })=>{ 

       axios({
        method: 'post',
        url: 'http://192.168.1.48:8080/onlinelearning/register',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        data:data,
        timeout: 5000,
      })
        .then((response) => {

          console.log(response.data);
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

