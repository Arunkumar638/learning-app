
"use client"

import { BiRename, BiSolidUserCircle, BiPhoneCall} from 'react-icons/bi';
import{ FaRegEnvelope } from 'react-icons/fa';
import{ CgRename } from 'react-icons/cg';
import{ MdPassword } from 'react-icons/md';
import React,{useState} from 'react';
import styles from './signup.module.css'
import {save} from '../actions/userActions'
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
    { text: 'Gender',value: '' },
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
  };
  const handleSubmit = (e: any) =>{
    e.preventDefault();
    details.phoneNumber = code + details.phoneNumber;
    save(details);
    clear();
  };
    return(
      <>
        <div className={styles.header} id='back'>
           <div className={styles.main1}  id='con'>
            <div className={styles.card1} >
              <div className={styles.align3} id="item">

                <div className='py-10'>
                   <h2 className={styles.headertext}>Sign Up</h2>
                   <div className={styles.underline}></div>
                    <div className='flex justify-center my-2'> 
                    </div>
                </div>

              <div className={styles.align}>

               <div className={styles.input}>
                 <CgRename/>
                 <div className={styles.in} />
             
                 <input type='text' onChange={handleChange} value={details.firstName} name='firstName' placeholder='FirstName' className='bg-gray-100 outline-none text-sm flex-1' required/>
               </div>

               <div className={styles.input}>
                 <BiRename/>
                 <div className={styles.in} />
              
                 <input type='text' onChange={handleChange} value={details.lastName} name='lastName' placeholder='LastName' className='bg-gray-100 outline-none text-sm flex-1' required/>
               </div>

              {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <FaUserGraduate/>
              <div className='text-gray-400 mr-1' />
              <input type='text' onChange={handleChange} value={details.department} name='department' placeholder='Department' className='bg-gray-100 outline-none text-sm flex-1' required/>
              </div> */}
              
              <div id='option'>
               <select value={selected} onChange={optionChange} className='w-20'>
                 {genderNames.map(option => (
                 <option key={option.value} value={option.value}>
                 {option.text}
                  </option>
                 ))}
               </select>
               </div>
               <input value={code} id='code' disabled/>
               <div className={styles.input}>
                  <BiPhoneCall/>
                 <div className={styles.in} />
                 <input type='text' onChange={handleChange} value={details.phoneNumber} name='phoneNumber' placeholder='phoneNumber' className='bg-gray-100 outline-none text-sm flex-1 w-20' required/>
               </div>

                <div className={styles.input}>
                 <FaRegEnvelope />
                 <div className={styles.in} />
              
                 <input type='email' onChange={handleChange} value={details.email} name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' required/>
               </div>

              {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
              <BiSolidUserCircle/>
              <div className='text-gray-400 mr-1' />
             
              <input type='text' onChange={handleChange} value={details.userName} name='userName' placeholder='UserName' className='bg-gray-100 outline-none text-sm flex-1' required/>
              </div> */}

                <div className={styles.input}>
                 <MdPassword/>
                 <div className={styles.in} />
              
                 <input type='password' onChange={handleChange} value={details.password} name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' required/>
               </div><br/>
  
              </div>

             <button onClick={navback} className={styles.pagebutton}>Back</button>
             <button onClick={clear} className={styles.pagebutton}>Clear</button>
             <button onClick={handleSubmit} id='signup' className={styles.pagebutton}>Register</button>
           </div>
           </div>
          </div>
        </div>
      </>
    )
}
