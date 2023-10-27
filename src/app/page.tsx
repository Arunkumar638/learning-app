"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/style.module.css';
import { Row, Col, Button, Image, Avatar } from 'antd';
import { Footer, Header } from 'antd/es/layout/layout';
import {CopyrightOutlined} from '@ant-design/icons';

 function Home() {
  
  const router = useRouter();
  const navgot = ()=>{
    router.push('/login');
  }
  return (
    <div className='bg-white'>

        <Header className='flex flex-row bg-slate-100'>
          <h3 className={styles.header}>E-Learning</h3>
          <Button className={styles.button1}>About us</Button>
          <Button className={styles.button2} onClick={navgot}>Login</Button>
          <Button className={styles.button3} onClick={navgot}>Sign Up</Button>
        </Header>

        <Row>
          <Col>
            <Image src='/Assets/software engineer.svg' height={600} width={600} alt='Software Engineer' className={styles.image}/>
            </Col>
            <Col className='w-content mt-content-top ml-content-left'>
            <h3 className={styles.contentText}>Online Programming</h3>
            <h3 className={styles.contentText}>Learning platform</h3>
            <p className={styles.content}>New to programming? Not sure where to get started. You are at
              the right place. Learn top software programming languages to
              sharpen your coding skills. No local setup needed. Online
              content, Online editor and online compiler</p>
             <Button className='w-button mt-7 bg-pale-yellow text-sm font-roboto text-dark-blue font-medium'>Start your 7 days free trail</Button>            
        </Col>
      </Row>
      <Row className='bg-dark-blue h-content'>
        <Col className='ml-points-left mt-7'>
        <h3 className={styles.head}>Our Services</h3>
        <ul className='list-disc mt-7'>
          <li className={styles.list}>Web application development</li><br/>
          <li className={styles.list}>Online software training</li><br/>
          <li className={styles.list}>E-learning platform</li><br/>
          <li className={styles.list}>Design Consultancy</li><br/>
          <li className={styles.list}>Amazon Web Service training</li>
        </ul>
        </Col>
        <Col className='ml-points-left mt-7'>
        <h3 className={styles.head}>Industry Expertise</h3>
        <ul className='list-disc mt-7'>
          <li className={styles.list}>Full Stack Web Development</li><br/>
          <li className={styles.list}>React, node Js, MongoDB, Java</li><br/>
          <li className={styles.list}>AWS Cloud migration Solutions</li><br/>
          <li className={styles.list}>AWS Cloud hosting and monitoring</li><br/>
          <li className={styles.list}>Dev-Ops and SRE</li><br/>
          <li className={styles.list}>AWS Cloud Automation Solutions</li>
        </ul>
        </Col>
        <Col className='ml-points-left mt-7'>
        <h3 className={styles.head}>Follow Us</h3>
        <ul className='mt-7'>
        <li><Avatar src='/Assets/Linkedin.svg' size={30}></Avatar></li>
        </ul>
        </Col>
        <Col className='ml-points-left mt-7'>
        <h3 className={styles.head}>Contact Us</h3>
        <ul className='mt-7'>
          <li><Avatar src='/Assets/Phone.svg' size={30}></Avatar><span className={styles.list}>+91 7397061119  (IND)</span></li><br/>
          <li><Avatar src='/Assets/Mail.svg' size={30}></Avatar><span className={styles.list}>info@gyroneb.com</span></li>
        </ul>
        </Col>
      </Row>
    <Footer className='bg-pale-yellow'><CopyrightOutlined size={15} className='ml-7 text-dark-blue '/><span className='text-dark-blue font-roboto ml-2'>Copyright GYRONEB. All Rights Reserved</span></Footer>
    </div>
  )
  
}

export default Home;