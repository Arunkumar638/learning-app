
"use client"

import { BiRename } from 'react-icons/bi';
import{ FaRegEnvelope } from 'react-icons/fa';
import{ CgRename } from 'react-icons/cg';
import{ MdPassword } from 'react-icons/md';
import React,{useState} from 'react';
import { Card, Input, Space, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from '../../styles/signup.module.css'
import {save} from '../../actions/userActions'
import { useRouter } from 'next/navigation';

export default function signUp(){
  const router = useRouter();
  var code = '+91-';
  var [details, setDetails] = useState({
    firstName:"", 
    lastName:"",
    gender:"",
    phoneNumber:"",
    email:"",
    password:""
  });
  const navback = ()=>{

    router.push('/login');
  }
  var genderNames = [
    {text:"Gender",value:''},
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },

  ];
  const [selected, setSelected] = useState(genderNames[0].value);
  const optionChange = (event:any) => {
    setSelected(event.target.value);
    details.gender = event.target.value
  };

  const clear = ()=>{
    setDetails({
      firstName:"", 
      lastName:"",
      gender:"",
      phoneNumber:"",
      email:"",
      password:""
    });
  }
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
    console.log(details);
  };
  const handleSubmit = (e: any) =>{
    e.preventDefault();
    details.phoneNumber = code + details.phoneNumber;
    save(details).then((data)=>{
      alert(data.msg);
    });
    clear();
  };
    return(
      <>
        <div className='bg-gradient-to-r from-orange to-coral flex flex-col h-screen'>
           <div className={styles.main1}>
            <Card className='mt-align p-card'>
                <div className='py-10'>
                   <h2 className={styles.headertext}>Sign Up</h2>
                   <div className={styles.underline}></div>                   
                </div>           
              <Space direction="vertical">
                 <Input placeholder="FirstName" prefix={<CgRename/>} onChange={handleChange} value={details.firstName} name='firstName' required/>
                 <Input placeholder="LastName" prefix={<BiRename />} onChange={handleChange} value={details.lastName} name='lastName' required/> 
                 <div className='mr-option'>
                  <select value={selected} onChange={optionChange} className='w-20 h-7'>
                  {/* <Select defaultValue="Zhejiang" options={genderNames} value={details.gender} onChange={handleChange} /> */}
                 {genderNames.map(option => (
                 <option key={option.value} value={option.value}>
                 {option.text}
                  </option>
                 ))}
                  </select>
                 </div>
                               
                <Input placeholder="PhoneNumber" type='number' prefix={<input value={code} className='w-code h-code' disabled/>} onChange={handleChange} value={details.phoneNumber} name='phoneNumber' required/>
                <Input placeholder="Email" type='email' prefix={<FaRegEnvelope />} onChange={handleChange} value={details.email} name='email' required/>
                <Input.Password                  
                    placeholder="Password"
                    name='password'
                    prefix={<MdPassword/>}
                    onChange={handleChange}
                    value={details.password}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
               </Space><br/><br/> 
            <div className='mt-4'>              
             <button onClick={navback} className={styles.pagebutton}>Back</button>
             <button onClick={clear} className={styles.pagebutton}>Clear</button>
             <button onClick={handleSubmit} id='signup' className={styles.pagebutton}>Register</button>
             </div>  
           </Card>
          </div>
        </div>
      </>
    )
}
