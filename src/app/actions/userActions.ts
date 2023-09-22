import axios from "axios";

export const save = async(data: { firstName: String; email: String; password: String; })=>{ 

       axios({
        method: 'post',
        url: 'http://192.168.1.48:8080/onlinelearning/signup',
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        },
        data:data,
        timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
      })
        .then((response) => {
          console.log(response.data);
          alert(response.data);
        })
        .catch((error) => {

          console.log(data);
          console.error('Error:', error);    
          if (error.response) {
            alert(error.response.data);
            console.log('Response data:', error.response.data);
            console.log('Response status:', error.response.status);
          }     
      });  

}

export const loginAction = async(data: {email: String; password: String; })=>{ 

    return axios({
     method: 'post',
     url: 'http://192.168.1.48:8080/onlinelearning/login',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     data:data,
     timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
   })
     .then((response) => {

       console.log("sfhgderj", response.data);
       return response.data;

     })
}

export const forgotAction = async(data: {email: String; })=>{ 

    axios({
     method: 'post',
     url: 'http://192.168.1.48:8080/onlinelearning/forgot-password',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     data:data,
     timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
   })
     .then((response) => {

       console.log(response.data);
       alert(response.data);
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
export const resetAction = async(data:{token:String;password:String;})=>{ 

    axios({
     method: 'post',
     url: 'http://192.168.1.48:8080/onlinelearning/reset-password',
     headers: { 
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': "*"
     },
     data:data,
     timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
   })
     .then((response) => {

       console.log(response.data);
       alert(response.data);
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

export function removeacc(Email:any){
 
      axios({
          method: 'delete',
          url: `http://192.168.1.48:8080/onlinelearning/deleteuser/${Email}`,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
          },
          timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
        })
          .then((response) => {
  
            console.log(response.data);
            alert(response.data);

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

  export function getUser(email:String){

      return axios({
          method: 'get',
          url: `http://192.168.1.48:8080/onlinelearning/user-details/${email}`,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
          },
          timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
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
