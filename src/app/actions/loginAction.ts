import axios from "axios";
import { useRouter } from "next/navigation";
const loginAction = async(data: {email: String; password: String; })=>{ 
  const router = useRouter();
       axios({
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

          console.log(response.data);
          alert(response.data);
          router.push('/dashboard');
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

 export default loginAction;