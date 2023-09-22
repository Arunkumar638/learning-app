
"use client"

import{FaRegEnvelope} from 'react-icons/fa';
import React from 'react';
import {forgotAction} from '../actions/userActions'
import styles from './forgot.module.css'
import { useRouter } from 'next/navigation';

export default function forgot(){
  const router = useRouter();
  const [details, setDetails] = React.useState({
    email:"",
  });
  const navback = ()=>{
    router.push('/login');
  }
//   const clear = ()=>{
//     setDetails({

//       email:"",
//     });
//   }
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };
  const handleSubmit = (e: any) =>{
    e.preventDefault();
    forgotAction(details);
  };
    return(
    
        <div className={styles.header} id='back'>
            <div className={styles.main1}  id='con'>
            <div className={styles.card1} >
     <div className={styles.align3} id="item">
     <div className='py-10'>
        <h2 className={styles.headertext}>Verify Email</h2>
        <div className={styles.underline}></div>
        <div className='flex justify-center my-2'> 
        </div>
        </div>
        <div className={styles.align}>
              
              <div className={styles.input3}>
              <FaRegEnvelope />
              <div className={styles.in} />
              
              <input type='email' onChange={handleChange} value={details.email} name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' required/>
              </div>

          </div>

          <button onClick={navback} className={styles.pagebutton}>Back</button>
          {/* <button onClick={clear} className='border-2 border-rose-400 rounded-full px-12 py-2 ml-3 inline-block font-semibold hover:bg-rose-400 hover:text-white'>Clear</button> */}
              <button onClick={handleSubmit} id='signup' className={styles.pagebutton}>Verify</button>

            </div>
            </div>
            </div>
        </div>
        
    )
}
