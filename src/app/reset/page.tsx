"use client"

import React from 'react';
import {MdLockOutline} from 'react-icons/md';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {GiToken} from 'react-icons/gi';
import {resetAction} from '../../actions/userActions';
import styles from '../../styles/reset.module.css';
import { Card, Input, Space, Select } from 'antd';
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
        <div className='bg-gradient-to-r from-orange to-coral flex flex-col h-screen'>
        <div className={styles.main1}>
         <Card className='mt-forgot p-forgot'>
             <div className='py-10'>
                <h2 className={styles.headertext}>Reset Password</h2>
                <div className={styles.underline}></div>                   
             </div>           
           <Space direction="vertical">
              <Input placeholder="Access Token" prefix={<GiToken />} onChange={handleChange} value={details.token} name='token' required/>        
             <Input.Password                  
                 placeholder="New Password"
                 name='password'
                 prefix={<MdLockOutline />}
                 onChange={handleChange}
                 value={details.password}
                 iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                 />
            </Space><br/><br/>                 
            <div className='mt-4'>           
           <button onClick={navback} className={styles.pagebutton}>Back</button>
           <button onClick={handleSubmit}  className={styles.pagebutton}>Reset</button>
          </div> 
        </Card>
       </div>
     </div>
    )
}
