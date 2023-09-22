"use client"

import {useState} from 'react';
import Card from './profilecard';
import styles from '../style.module.css'
import Avatar from 'react-avatar';

 
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
           <Avatar src='https://cdn.dribbble.com/userupload/7202257/file/original-9437ac4d8580b5ad33030256a442946b.png?resize=400x300&vertical=center' className='shadow-xl' round size='50'></Avatar>
            </div>
            <div>
            <button onClick={handleToggleProfileCard}>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN61Q-7MGeXmbkG93I6jxczRN9gjlSgN_91raHDgzJOtS86ttcmOF6HIy9Kl_pdAGGWQM&usqp=CAU'size='50'className='shadow-xl' round></Avatar>
            </button>
             <Card isOpen={isProfileCardOpen} onClose={handleToggleProfileCard}/>
            </div>
        </div>
      </nav>
     </div>

    );
}