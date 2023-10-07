"use client"

import {useState} from 'react';
import Card from './profilecard';
import styles from './dashboard.module.css'
import Avatar from 'react-avatar';
import Image from 'next/image';


function Dashboard(){
    const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);

    const handleToggleProfileCard = () => {
      setIsProfileCardOpen(!isProfileCardOpen);
    };
   
    return(
     <div className='min-h-screen' id='back'>
      <nav className={styles.dashboard}>
        <div className={styles.card2}>
            <div>

            <span id='text' className='text-rose-400 font-serif text-lg'>Gyro Learn</span> 
            <Avatar src='../Assets/logo.png' className={styles.clear} round size='45'></Avatar>
            </div>

            <div>
            <button onClick={handleToggleProfileCard}>
            <Avatar src='../Assets/images.png' className={styles.clear} round size='50'></Avatar>
            </button>
             <Card isOpen={isProfileCardOpen} onClose={handleToggleProfileCard}/>
            </div>
        </div>
      </nav>
     </div>

    );
}

export default Dashboard;