import axios from "axios";

export const getStates = async()=>{ 

    return axios({
     method: 'get',
     url: 'http://192.168.1.48:8081/onlinelearning/states',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     timeout: 5000, 
   })
     .then((response) => {

 
       return response.data;
     })
     .catch((error) => {
       console.error('Error:', error);    
       if (error.response) {
         console.log('Response data:', error.response.data);
         console.log('Response status:', error.response.status);
       }     
   });  
}

export const getCountry = async()=>{ 

    return axios({
     method: 'get',
     url: 'http://192.168.1.48:8081/onlinelearning/country',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     timeout: 5000, 
   })
     .then((response) => {


       return response.data;
     })
     .catch((error) => {
       console.error('Error:', error);    
       if (error.response) {
         console.log('Response data:', error.response.data);
         console.log('Response status:', error.response.status);
       }     
   });  
}

export const saveAddress = async(data: {doorNo:String, street:String, city:String, state:String, country:String, email:String })=>{ 

       return axios({
        method: 'put',
        url: `http://192.168.1.48:8081/onlinelearning/update-address/${data.email}`,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        data:data,
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

export const getAddress = async(data:string)=>{ 

  return axios({
   method: 'get',
   url: `http://192.168.1.48:8081/onlinelearning/get-addresses/${data}`,
   headers: { 
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': "*"
   },
   data:data,
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

export const updateAddress = async(data:string)=>{ 

  return axios({
   method: 'put',
   url: `http://192.168.1.48:8081/onlinelearning/edit-address/${data.email}/${data.id}`,
   headers: { 
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': "*"
   },
   data:data,
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

export const deleteAddress = async(data:string)=>{ 

  return axios({
   method: 'delete',
   url: `http://192.168.1.48:8081/onlinelearning/edit-address/${data.email}/${data.id}`,
   headers: { 
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': "*"
   },
   data:data,
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