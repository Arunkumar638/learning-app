"use client"

import react from 'react';
import styles from './profilecard.module.css';
import Avatar from 'react-avatar';
import { useRouter } from 'next/navigation';


const Card = ({ isOpen, onClose }:any) => {
  const router = useRouter();
  const route = ()=>{
    router.push("/profilepage");
    onclose;
  }
    return (
      <div className={`${styles.profileCard} ${isOpen ? styles.show : styles.hide}`}>
        <div className={styles.avatar}>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN61Q-7MGeXmbkG93I6jxczRN9gjlSgN_91raHDgzJOtS86ttcmOF6HIy9Kl_pdAGGWQM&usqp=CAU'size='100' round></Avatar>
        </div>
        <div className={styles.cardContent}>
          <h2>Arunkumar</h2>
          <p>arunkumar98svn@gmail.com</p>
          <p>+91 353225343546</p>
        </div>
        <button onClick={route} className={styles.profileButton}>Profile Settings</button>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    );
  };

  export default Card;

  