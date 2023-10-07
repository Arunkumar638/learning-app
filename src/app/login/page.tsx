"use client"

import React,{useState} from 'react';
import { useRouter } from 'next/navigation'
import {FaLinkedin, FaGoogle, FaFacebookF, FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
import {loginAction} from '../actions/userActions';
import styles from './login.module.css';
import { error } from 'console';


 function login() {
  const router = useRouter();
  const [isLoginFailed, setLoginStatus] = useState(false);
  const [details, setDetails] = useState({
    email:"",
    password:""
  });
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };
  
  const clear = ()=>{
    setDetails({
      email:"",
      password:""
    });
  }
  const handleSubmit = (e: any) =>{
    e.preventDefault();
    loginAction(details).then((data)=>{
      alert(data)
    })
    .catch((error)=>{
      setLoginStatus(true);
    console.log("Error");
    })

  };
  const navup = ()=>{
    router.push('/signUp')
  }
  const navgot = ()=>{
    router.push('/forgot')
  }
  return (
    
    <div className={styles.header} id='back'>
      
    <main className={styles.main}>
      <div className={styles.card} >
     <div className='w-3/5 p-5'>
      <div className='text-left font-bold'>
        <span className={styles.color}>Gyro</span> Learn
      </div>
      <div className='py-10'>
        <h2 className={styles.headertext}>Sign-in to Account</h2>
        <div className={styles.underline}></div>
        <div className={styles.align1}> 
        <a href='#' className={styles.link}>
          <FaFacebookF className={styles.textsize}/>
          </a>
          <a href='#' className={styles.link}>
          <FaLinkedin className={styles.textsize}/>
          </a>
          <a href='#' className={styles.link}>
          <FaGoogle className={styles.textsize} />
          </a>
          </div>
          <p className='text-gray-400 my-3'>or use your email account</p>
          <div className={styles.align}>
            <div className={styles.input}>
              <FaRegEnvelope className={styles.icon} />
              <input type='email'onChange={handleChange} value={details.email} name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' required/>
              </div>
              <div className={styles.input}>
              <MdLockOutline className={styles.icon} />
              <input type='password' onChange={handleChange} value={details.password} name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' required/>
              </div>
              <div className={styles.align2}>
                
                <button onClick={navgot} className='text-xs text-rose-400'>Forgot password?</button>             
              </div>
              <div>
              <button onClick={clear} className={styles.pagebutton}>Clear</button>
              <button id='clear' onClick={handleSubmit} className={styles.pagebutton}>Sign in</button>
              {
                isLoginFailed && (
                  <div>Invalid Credentials</div>
                )
              }
          </div>
          </div>
      </div>
      </div>
     <div className={styles.signup}>
      <h2 className={styles.headertext1}>Hello Friend!</h2>
      <div className={styles.underline1}></div>
      <p className='mb-10'>Fill up your Personal Info and Start Journey with us</p>

      <button onClick={navup} className={styles.signupbutton}>Sign Up</button>
      </div>
     </div>
    </main>
    </div>
  )
  
}

export default login;