"use client"

import React from 'react';
import { useRouter } from 'next/navigation'
import styles from './style.module.css'
export default function Home() {
  
  const router = useRouter();
  const navgot = ()=>{
    router.push('/login')
  }
  return (
    
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100' id='back'>
      <label className='text-4xl font-bold mb-2 text-white'>Gyro Learn</label>
      <div className='border-2 w-10 border-white inline-block '></div>
      <div className='w-2/5 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
      <h2 className='text-3xl font-bold mb-8'>Hello Friend!</h2>
  
      <p className='mb-10 text-2xl'>Welcome to our greatest Learning platform</p>

      <button onClick={navgot} className={styles.button}>Login</button><br/><br/>
      <label className='text-xl text-rose-600'>Powered by Gyroneb</label>
      </div>
    </div>
  )
  
}
