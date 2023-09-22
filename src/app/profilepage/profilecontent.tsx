"use client"

import React,{useState} from 'react';
import Avatar from 'react-avatar';
import AddressPopupForm from './addressform'
import {removeacc, getUser} from '../actions/userActions';
import DeleteUser from'./deleteuser';
import styles from '../style.module.css'
import { useRouter } from 'next/navigation';
import {saveAddress, getStates, getCountry} from '../actions/addressActions';
var res = '';
export const content = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    var [details, setDetails] = useState({
      firstName:"", 
      lastName:"",
      gender:"",
      phoneNumber:"",
      email:"",
      password:""
    });
     
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
    const yes = ()=>{
      const router = useRouter();
      removeacc(details.email)
      router.push('/');
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
    };
    return(
      <div>
      <main>
        <h2 className={styles.headertext3}>Hello User<span></span></h2><br/>
        <h2 className={styles.headertext2}>Personal Details</h2><br/><br/>
        <label className={styles.label}>First Name</label>
        <label className={styles.label1}>Last Name</label>
        <label className={styles.label2}>Gender</label>
        <label className={styles.label3}>Phone Number</label>
        <label className={styles.label4}>Email</label>
  
        <div className={styles.align}>
  
          <div className={styles.input}>
   
           <div className={styles.in} />
           <input type='text' name='firstName' onChange={handleChange} value={details.firstName} placeholder='FirstName' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
         
          <div className={styles.input}>
  
           <div className={styles.in} />
            <input type='text' name='lastName' onChange={handleChange} value={details.lastName} placeholder='LastName' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
  
           <div className={styles.input}>
  
           <div className={styles.in} />
            <input type='text' name='gender' onChange={handleChange} value={details.gender} placeholder='Gender' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
  
           <div className={styles.input}>
            
            <div className={styles.in} />
            <input type='text' name='phoneNumber' onChange={handleChange} value={details.phoneNumber} placeholder='PhoneNumber' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
           <div className={styles.input}>
  
            <div className={styles.in} />
            <input type='text' name='email' onChange={handleChange} value={details.email} placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
           <div><br/><br/>
            <button className={styles.pagebutton} onClick={handleSubmit}>Update</button>
            <button className={styles.pagebutton} onClick={clear}>Clear</button>
           </div>
           <div className={styles.divider}>
           </div>
           
           <button className={styles.profileButton} onClick={()=>setIsPopupVisible(true)}>Remove Account</button>
           
         </div>
      </main>
      <DeleteUser trigger={isPopupVisible}>
      <h2 className={styles.headertext4}>Are you Sure</h2><br/><br/>
      <button onClick={yes} className={styles.yes}>Yes</button>
      <button onClick={()=> setIsPopupVisible(false)} className={styles.no}>No</button>
    </DeleteUser>
    </div>
    )
  }
  
  export const address = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    var [address, setAddress] = useState({
      DoorNo:"", 
      Street:"",
      City:"",
      State:"",
      Country:"",
   
    });
  
    var States = [
      { text: 'State',value: '' },
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
  
    ];
  
    const [selected, setSelected] = React.useState(States[0].value);
    const optionChange = (event:any) => {
      setSelected(event.target.value);
      address.State = event.target.value
    };
  
    const clear = ()=>{
      setAddress({
      DoorNo:"", 
      Street:"",
      City:"",
      State:"",
      Country:""
      });
    }
     
    const handleChange = (e: any) => {
      const { name, value } = e.target;
      setAddress({
        ...address,
        [name]: value,
      });
    };
    const handleSubmit = (e: any) =>{
  
      e.preventDefault();
      saveAddress(address);
      getStates();
      getCountry();
  
    };
    return(
      <div>
        <main>
        <h2 className={styles.headertext3}>User Address</h2><br/><br/>
        <button className={styles.profileButton1} onClick={() => setIsPopupVisible(true)} >+ Add new Address</button>   
        {/* <textarea>
          </textarea>      */}
        </main>
        <AddressPopupForm trigger={isPopupVisible}>
          <button  onClick={handleSubmit}>
            <Avatar src='https://img.icons8.com/?size=1x&id=59875&format=png' className={styles.save} round size='20'></Avatar>
            </button>
          <button onClick={clear}>
            <Avatar src='https://img.icons8.com/?size=1x&id=60644&format=png' className={styles.clear} round size='20'></Avatar>
            </button> 
            <button  onClick={() => setIsPopupVisible(false)}>
                <Avatar src='https://img.icons8.com/?size=1x&id=71200&format=png' className={styles.close} round size='20'></Avatar>
                </button>
        <h2>Enter Your Address</h2><br/>
  
        <label>Door No</label>
        <div className={styles.input}>
  
            <div className={styles.in} />
            <input type='text' name='DoorNo' onChange={handleChange} value={address.DoorNo} placeholder='Door No' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
  
           <label>Street</label>
           <div className={styles.input}>
  
            <div className={styles.in} />
            <input type='text' name='Street' onChange={handleChange} value={address.Street} placeholder='Street' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
  
           <label>City</label>
           <div className={styles.input}>
  
            <div className={styles.in} />
            <input type='text' name='City' onChange={handleChange} value={address.City} placeholder='City' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
  
           <label>State</label>
           
            <div id='option'>
                 <select value={selected} onChange={optionChange} className={styles.states}>
                   {States.map(option => (
                   <option key={option.value} value={option.value}>
                   {option.text}
                    </option>
                   ))}
                 </select>
                 </div><br/>
           
  
           <label>Country</label>
           <div className={styles.input}>
  
            <div className={styles.in} />
            <input type='text' name='Country' onChange={handleChange}value={address.Country}  placeholder='Country' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
        </AddressPopupForm>
      </div>
  
    );
  }

  export const getuser = (email: any)=>{
   
    getUser({email,res});
  }