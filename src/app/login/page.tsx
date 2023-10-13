"use client"

import React,{useState} from 'react';
import { useRouter } from 'next/navigation'
import {FaLinkedin, FaGoogle, FaFacebookF, FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
import {loginAction} from '../../actions/userActions';
import styles from '../../styles/login.module.css';
import { Card, Input, Space, Select } from 'antd';
import{ MdPassword } from 'react-icons/md';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

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
      console.log(data);
      alert(data.msg);
      const token  = data.token
      console.log(token);
      localStorage.setItem('token',token);
    })
    .catch((error)=>{
      setLoginStatus(true);
    console.log("Error",error);
    })

  };
  const navup = ()=>{
    router.push('/signUp')
  }
  const navgot = ()=>{
    router.push('/forgot')
  }
  return (
    
    <div className='bg-gradient-to-r from-orange to-coral flex flex-col h-screen'>
      
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
          <div>
          <Space direction="vertical">
          <Input placeholder="Email" type='email' prefix={<FaRegEnvelope />} onChange={handleChange} value={details.email} name='email' required/>
                <Input.Password                  
                    placeholder="Password"
                    name='password'
                    prefix={<MdPassword/>}
                    onChange={handleChange}
                    value={details.password}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
          </Space>
              <div className={styles.align2}>
                <button onClick={navgot} className='text-xs text-rose-400 ml-2 mt-2'>Forgot password?</button>             
              </div>
              <div>
              <button onClick={clear} className={styles.pagebutton}>Clear</button>
              <button id='clear' onClick={handleSubmit} className={styles.pagebutton}>Sign in</button><br/>
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