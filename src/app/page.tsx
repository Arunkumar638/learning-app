"use client"

import React from 'react';
import { useRouter } from 'next/navigation'
import styles from '../styles/style.module.css'

 function Home() {
  
  const router = useRouter();
  const navgot = ()=>{
    router.push('/login')
  }
  return (
    
    <div className={styles.header} id='back'>
      <label className={styles.text1}>Gyro Learn</label>
      <div className={styles.underline}></div>
      <div className={styles.align}>
      <h2 className={styles.headertext}>Hello Friend!</h2>
  
      <p className={styles.text}>Welcome to our greatest Learning platform</p>

      <button onClick={navgot} className={styles.button}>Login</button><br/><br/>
      <label className={styles.text2}>Powered by Gyroneb</label>
      </div>
    </div>
  )
  
}

export default Home;