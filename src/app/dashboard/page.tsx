"use client"

import {useState} from 'react';
import Card from './profilecard';
import styles from './dashboard.module.css'
import Avatar from 'react-avatar';
import Image from 'next/image';
 
export default function dashboard(){
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
             <div className="w-12 h-18 rounded-full overflow-hidden">
              <Image src='/Assets/logo.png' alt="Avatar" width={60} height={60} className="object-cover" />
             </div>
            </div>

            <div>
            <button onClick={handleToggleProfileCard}>
             <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image src='/Assets/images.png' alt="Avatar" width={64} height={64} className="object-cover" />
             </div>
            </button>
             <Card isOpen={isProfileCardOpen} onClose={handleToggleProfileCard}/>
            </div>
        </div>
      </nav>
     </div>

    );
}