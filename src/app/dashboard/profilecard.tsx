"use client"

import react, { useEffect,useState } from 'react';
import axios from 'axios';
import styles from './profilecard.module.css';
import Avatar from 'react-avatar';
import { useRouter } from 'next/navigation';
import { logoutAction } from '../actions/userActions';

const Card = ({ isOpen, onClose }:any) => {
  const router = useRouter();
  const [userData, setUserData] = useState("");
  const route = ()=>{
    router.push("/profilepage");
    onclose;
  }

  const logout = () =>{
    const data = localStorage.getItem("userDetails");
    logoutAction(data).then((data)=>{
      localStorage.clear();
      router.push('/login');
      alert(data);
    })
  }

  useEffect(()=>{

    const getloginStatus = async () => {
      var details = localStorage.getItem("userDetails");
      const response =  await axios.get(`http://192.168.1.48:8080/onlinelearning/login-status/${details}`);
      var data = await response.data
      setUserData(data);
     };
     
     getloginStatus();
  },
  [])
    return (
      <div className={`${styles.profileCard} ${isOpen ? styles.show : styles.hide}`}>
        <button onClick={onClose}>
          <Avatar src='../Assets/close.png' className={styles.close} round size='20'></Avatar>
          </button>
        <div className={styles.avatar}>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN61Q-7MGeXmbkG93I6jxczRN9gjlSgN_91raHDgzJOtS86ttcmOF6HIy9Kl_pdAGGWQM&usqp=CAU'size='100' round></Avatar>
        </div>

        {userData ? <div className={styles.cardContent}>
          <h2>{userData.userName}</h2>
          <p>{userData.email}</p>
          <p>{userData.phoneNumber}</p>
        </div> : null}

        <button onClick={route} className={styles.profileButton}>Profile Settings</button>
        <button onClick={logout} className={styles.closeButton}>Logout</button>
        
      </div>
    );
  };

  export default Card;

  