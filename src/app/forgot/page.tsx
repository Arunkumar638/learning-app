
"use client"

import React from 'react';
import {forgotAction} from '../../actions/userActions'
import styles from '../../styles/forgot.module.css'
import { useRouter } from 'next/navigation';
import { Card, Input, Col, Button } from 'antd';
import {MailOutlined, CheckOutlined} from '@ant-design/icons'

export default function Forgot(){
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
    <Col>
    <main className={styles.main1}>
    <Card className={styles.card}>
    <h3 className={styles.headertext}>Verify Email</h3>
    <Col className={styles.align}>
    <Input 
    placeholder='Email' 
    size='large' 
    name='email' 
    onChange={handleChange} 
    value={details.email} 
    prefix={<MailOutlined/>} 
    className={styles.input1}/>
    <Button className={styles.button} onClick={handleSubmit} icon={<CheckOutlined size={30}/>}>Verify</Button>
    <button onClick={navback} className={styles.button1}>Back</button><br/>
    </Col>
    </Card>
    </main>
    </Col>

    )
}
