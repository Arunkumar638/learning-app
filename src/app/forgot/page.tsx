
"use client"

import{FaRegEnvelope} from 'react-icons/fa';
import React from 'react';
import {forgotAction} from '../../actions/userActions'
import styles from '../../styles/forgot.module.css'
import { useRouter } from 'next/navigation';
import { Card, Input, Space, Select } from 'antd';

export default function forgot(){
  const router = useRouter();
  const [details, setDetails] = React.useState({
    email:"",
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
    forgotAction(details);
  };
    return(
        <div className='bg-gradient-to-r from-orange to-coral flex flex-col h-screen'>
        <div className={styles.main1}>
         <Card className='mt-forgot p-forgot'>
             <div className='py-10'>
                <h2 className={styles.headertext}>Verify Email</h2>
                <div className={styles.underline}></div>                   
             </div>           
           <Space direction="vertical">
             
             <Input placeholder="Email" type='email' prefix={<FaRegEnvelope />} onChange={handleChange} value={details.email} name='email' required/>
 
            </Space><br/><br/>   
          <div className='mt-4'>           
           <button onClick={navback} className={styles.pagebutton}>Back</button>
           <button onClick={handleSubmit}  className={styles.pagebutton}>Verify</button>
          </div>   
        </Card>
       </div>
     </div>

    )
}
