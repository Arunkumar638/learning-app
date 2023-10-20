"use client"

import React from 'react';
import {MdLockOutline} from 'react-icons/md';
import { EyeInvisibleOutlined, EyeTwoTone, SyncOutlined } from '@ant-design/icons';
import {GiToken} from 'react-icons/gi';
import {resetAction} from '../../actions/userActions';
import styles from '../../styles/reset.module.css';
import { Card, Input, Button, Col } from 'antd';
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
      <Col>
      <main className={styles.main1}>
      <Card className={styles.card}>
      <h3 className={styles.headertext}>Reset Password</h3>
      <Col className={styles.align}>
      <Input 
      placeholder='Reset Token' 
      size='large' 
      name='token' 
      onChange={handleChange} 
      value={details.token} 
      prefix={<GiToken/>} 
      className={styles.input1}/>
      <Input.Password 
          className={styles.input1}
          size='large'
          value={details.password}
          prefix={<MdLockOutline/>}
          name='password'
          placeholder="Password" 
          onChange={handleChange}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
      <Button className={styles.button} onClick={handleSubmit} icon={<SyncOutlined size={20}/>}>Reset</Button>
      <button onClick={navback} className={styles.button1}>Back</button><br/>
      </Col>
      </Card>
      </main>
      </Col>  
      )
}
