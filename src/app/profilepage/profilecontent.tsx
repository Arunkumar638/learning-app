"use client"

import React,{useState, useEffect} from 'react';
import Avatar from 'react-avatar';
import AddressPopupForm from './addressform'
import {removeacc, getUser, updateUser} from '../actions/userActions';
import DeleteUser from'./deleteuser';
import styles from './profile.module.css'
import { useRouter } from 'next/navigation';
import {saveAddress, getStates, getCountry, getAddress, updateAddress, deleteAddress} from '../actions/addressActions';

interface combineAddress {
  
    doorNo: string,
    street: string,
    city: String,
    state: String,
    country: String

}
export const content = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    //const email = localStorage.getItem("userDetails");
    var [details, setDetails] = useState({
      firstName:"", 
      lastName:"",
      email:"",
      gender:"",
      phoneNumber:"",
    });
    
    useEffect(()=>{
        getUser("arunkumar98svn@gmail.com").then((data)=>{
            console.log(data);
            if(!data) return;
            setDetails(data);
        })
    }, [])

    const clear = ()=>{
      setDetails({
        firstName:"", 
        lastName:"",
        email:"",
        gender:"",
        phoneNumber:"",
      });
    }
    const success = ()=>{
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
      updateUser(details).then((data)=>{
        setDetails(data);
        alert("User Details Updated Successfully");
      })
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
        {/* <label className={styles.label4}>Email</label> */}
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
           {/* <div className={styles.input}>
            
            <div className={styles.in} />
            <input type='text' name='email' onChange={handleChange} value={details.email} placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' required disabled/>
           </div> */}
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
      <button onClick={success} className={styles.yes}>Yes</button>
      <button onClick={()=> setIsPopupVisible(false)} className={styles.no}>No</button>
    </DeleteUser>
    </div>
    )
  }
  
  export const address = ()=>{
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    var [isTextarea, setIsTextarea] = useState<combineAddress[]>([]);
    const [isTextareaVisible, setIsTextareaVisible] = useState(false);
    var [selected, setSelected] = useState("");
    var [address, setAddress] = useState({
      doorNo:"", 
      street:"",
      city:"",
      state:"",
      country:"",
      email:"arunkumar98svn@gmail.com"
    });
  
    const [stateList,setStateList] = useState([]);
    
    var [selectCountry, setSelectCountry] = useState("");
    var [IsEditPopup, setIsEditPopup] = useState(false);
    const [countryList, setCountry] = useState([])

    useEffect(()=>{
        getStates().then((data)=>{
            setStateList(data);
        })
        getCountry().then((data)=>{
            setCountry(data);
        })
        getAddress(address.email).then((data)=>{
          if(data!=null){
            setIsTextareaVisible(true);
            setIsTextarea(data);
            setAddress(data)
          }
        })

    },[])

    const optionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelected(selected = event.target.value);

      console.log("State change");
    };

    const countryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectCountry(selectCountry = event.target.value);

      console.log("Country change");
    };

    const clear = ()=>{
      setAddress({
      doorNo:"", 
      street:"",
      city:"",
      state:stateList.length > 0 ? stateList[0] : "",
      country:"",
      email:"arunkumar98svn@gmail.com"
      });
    } 

    const handleChange = (e: any) => {
      const { name, value } = e.target;
         setAddress({
          ...address,
          [name]: value,
        });
      }
    const handleAdd = ()=>{
      setIsPopupVisible(true);
      setIsEditPopup(false);
      clear();
    }

    const handleEdit = (address:any)=>{
      setIsPopupVisible(true);
      setIsEditPopup(true);
      setAddress(address);
    }

    const handleDelete = (address:any) =>{
      deleteAddress(address).then((data)=>{
        alert(data);
      })
   }
    const handleUpdate = (address:any)=>{
      console.log(address);
      updateAddress(address).then((data)=>{
        alert(data);
      })
    }
    const handleSubmit = (e: any) =>{
      e.preventDefault();
      address.state = selected;
      address.country = selectCountry;
      console.log(address);
      saveAddress(address).then((data)=>{
      setIsTextarea(isTextarea=data);
      console.log("....."+isTextarea.length);
      setIsTextareaVisible(true);
      clear();
      }).catch((error)=>{
    console.log("Error");
    })

    };

    return(
      <div>
        <main>
        <h2 className={styles.headertext3}>User Address</h2><br/><br/>
        <button className={styles.profileButton1} onClick={handleAdd} >+ Add new Address</button>   
         <div>

          {isTextareaVisible ? isTextarea.map((address,index)=>(
          <div key={index} className={styles.box}>
          <div></div>
          <textarea className={styles.textarea}>{address.doorNo + ", " + address.street + ", " + address.city + ", " + address.state + ", " + address.country}</textarea>
          <div className={styles.buttons}>
            <button className={styles.editbutton} onClick={()=>handleEdit(address)}>
              <Avatar src='../Assets/edit.png' className={styles.save} round size='30'></Avatar>
              </button>
            <button className={styles.deletebutton} onClick={()=>handleDelete(address)}>
              <Avatar src='../Assets/delete.png' className={styles.clear} round size='30'></Avatar>
              </button>
          </div>
          </div>)) :null}

         </div>
          
        </main>
        <AddressPopupForm trigger={isPopupVisible}>
          {
          IsEditPopup ? <button  onClick={()=>handleUpdate(address)}>
            <Avatar src='../Assets/savechanges.png' className={styles.save} round size='20'></Avatar>
            </button>
          :
          <button  onClick={handleSubmit}>
            <Avatar src='../Assets/save.png' className={styles.save} round size='20'></Avatar>
            </button>
            }
          <button onClick={clear}>
            <Avatar src='../Assets/clear.png' className={styles.clear} round size='20'></Avatar>
            </button> 
            <button  onClick={() => setIsPopupVisible(false)}>
                <Avatar src='../Assets/close.png' className={styles.close} round size='20'></Avatar>
                </button>
        <h2>Enter Your Address</h2><br/>
  
           <label>Door No</label>
        <div className={styles.input}>
  
            <div className={styles.in} />
            <input type='text' name='doorNo' onChange={handleChange} value={address.doorNo} placeholder='Door No' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
  
           <label>Street</label>
           <div className={styles.input}>
  
            <div className={styles.in} />
            <input type='text' name='street' onChange={handleChange} value={address.street} placeholder='Street' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
  
           <label>City</label>
           <div className={styles.input}>
  
            <div className={styles.in} />
            <input type='text' name='city' onChange={handleChange} value={address.city} placeholder='City' className='bg-gray-100 outline-none text-sm flex-1' required/>
           </div>
  
           <label>State</label>
           
            <div id='option'>
                 <select value={IsEditPopup ? address.state:selected} onChange={optionChange} className={styles.states}>
                 <option value=''>Select a state</option>
                   {stateList.map(option => (
                   <option key={option} value={option}>
                   {option}
                    </option>
                   ))}
                 </select>
                 </div><br/>
          
           <label>Country</label>
             <div id='option'>

                 <select value={IsEditPopup ? address.country:selectCountry} onChange={countryChange} className={styles.states}>
                 <option value=''>Select a Country</option>
                   {countryList.map(option => (
                   <option key={option} value={option}>
                   {option}
                    </option>
                   ))}
                 </select>
                 </div><br/>

        </AddressPopupForm>
      </div>
  
    );
  }

  