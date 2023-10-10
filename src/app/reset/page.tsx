"use client"

import React from 'react';
import {MdLockOutline} from 'react-icons/md';
import {GiToken} from 'react-icons/gi';
import {resetAction} from '../../actions/userActions'
import styles from './reset.module.css'
import { useRouter } from 'next/navigation';

export default function reset(){
  const router = useRouter();
  const [details, setDetails] = React.useState({
    token:"",
    password:"",
  });
  const navback = ()=>{
    router.push('/login');
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) =>{
    e.preventDefault();
    resetAction(details);
  };
    return(
      
        <div className={styles.header} id='back'>
            <div className={styles.main1}  id='con'>
            <div className={styles.card1} >
     <div className={styles.align3} id="item">
     <div className='py-10'>
        <h2 className={styles.headertext}>Reset password</h2>
        <div className={styles.underline}></div>
        <div className='flex justify-center my-2'> 
        </div>
        </div>
        <div className={styles.align}>

          <div className={styles.input4}>
              <GiToken />
              <div className={styles.in} />
              
              <input type='text' onChange={handleChange} value={details.token} name='token' placeholder='Access Token' className='bg-gray-100 outline-none text-sm flex-1' required/>
            </div>
          <div className={styles.input3}>
              <MdLockOutline />
              <div className={styles.in} />
              
              <input type='password' onChange={handleChange} value={details.password} name='password' placeholder='New password' className='bg-gray-100 outline-none text-sm flex-1' required/>
            </div>

          </div>

          <button onClick={navback} className={styles.pagebutton}>Back</button>
          {/* <button onClick={clear} className='border-2 border-rose-400 rounded-full px-12 py-2 ml-3 inline-block font-semibold hover:bg-rose-400 hover:text-white'>Clear</button> */}
              <button onClick={handleSubmit} id='signup' className={styles.pagebutton}>Reset</button>

            </div>
            </div>
            </div>
        </div>
        
    )
}
