"use client"

import React,{useState} from 'react';
import { useRouter } from 'next/navigation'
import {BiSolidUserCircle} from 'react-icons/bi';
import {loginAction} from '../../actions/userActions';
import styles from '../../styles/login.module.css';
import { Card, Input, Button, Col } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import{ MdPassword } from 'react-icons/md';
import {save} from '../../actions/userActions'
import { UserOutlined, UserAddOutlined, EyeInvisibleOutlined, EyeTwoTone, PhoneOutlined, MailOutlined, LoginOutlined } from '@ant-design/icons';

 function Login() {
  const router = useRouter();
  var code = '+91-';
  const [isSignup, setIsSignup] = useState(false)
  const [isLoginFailed, setLoginStatus] = useState(false);
  const [isChecked, setIsChecked] = useState(false)

  const [loginDetails, setLoginDetails] = useState({
    userEmail:"",
    userPassword:""
  });

  const [signupDetails, setSignupDetails] = useState({
    firstName:"", 
    lastName:"",
    gender:"",
    phoneNumber:"",
    email:"",
    password:""
  });

  var genderNames = [
    {text:"Gender",value:''},
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },

  ];

  const [selected, setSelected] = useState(genderNames[0].value);
  const optionChange = (event:any) => {
    setSelected(event.target.value);
    signupDetails.gender = event.target.value
  };
  const handleSignup = (e:any) =>{
    e.preventDefault();
    signupDetails.phoneNumber = code + signupDetails.phoneNumber;
    save(signupDetails).then((data)=>{
      alert(data.msg);
    });
  }
  const handleSignupChange = (e: any) => {
    const { name, value } = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
    console.log(signupDetails);
  };

  const handleLoginChange = (e: any) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleLogin = (e: any) =>{
    e.preventDefault();
    loginAction(loginDetails).then((data)=>{
      console.log(data);
      alert(data.msg);
      const token  = data.token
      console.log(token);
      localStorage.setItem('token',token);
    })
    .catch((error)=>{
      setLoginStatus(true);
    console.log("Error",error);
    })

  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    setIsChecked(e.target.checked);
  };
  // const clear = ()=>{
  //   setLoginDetails({
  //     userEmail:"",
  //     userPassword:""
  //   });
  // }
 
  const navgot = ()=>{
    router.push('/forgot')
  }
 
  return (
    
    <Col>
    <main className={styles.main}>
      <Card className={`p-card bg-light-blue ${isSignup?"mt-align":"mt-option"} w-option`}>
      
        <Button className={`border-0 ${isSignup?"text-dark-blue":"bg-dark-blue text-white"} h-button text-sm font-roboto`} onClick={()=>setIsSignup(false)}><UserOutlined/>Sign In</Button>
        <Button className={`border-0 ml-4 ${isSignup?"bg-dark-blue text-white":"text-dark-blue"} h-button text-sm font-roboto`} onClick={()=>setIsSignup(true)}><UserAddOutlined/>Sign Up</Button>
      
      {
        isSignup ?
        <Col className={styles.align}>
          <Input placeholder='Firstname' size='large' name='firstName' onChange={handleSignupChange} value={signupDetails.firstName} prefix={<BiSolidUserCircle/>} className={styles.input1}/>
          <Input placeholder='Lastname' size='large' name='lastName' onChange={handleSignupChange} value={signupDetails.lastName} prefix={<BiSolidUserCircle/>} className={styles.input1}/>
          <Input placeholder='Email' size='large' name='email' onChange={handleSignupChange} value={signupDetails.email} prefix={<MailOutlined/>} className={styles.input1}/>
          <Input.Password 
          className={styles.input1}
          size='large'
          value={signupDetails.password}
          prefix={<MdPassword/>}
          name='password'
          placeholder="Password" 
          onChange={handleSignupChange}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Input placeholder='Phone Number' size='large' name='phoneNumber' onChange={handleSignupChange} value={signupDetails.phoneNumber} prefix={<PhoneOutlined/>} className={styles.input1}/><br/>
          <select value={selected} onChange={optionChange} 
          className={styles.dropdown}>
                 {genderNames.map(option => (
                 <option key={option.value} value={option.value}>
                 {option.text}
                  </option>
                 ))}
                  </select><br/>
          <Checkbox onChange={onChange} className={styles.check}><span className='mr-8'>Accept Terms & Conditions</span></Checkbox><br/>
          <Button className={styles.button} onClick={handleSignup} icon={<LoginOutlined size={30}/>}>Sign Up</Button>
          </Col> : <Col className={styles.align}>
          <Input placeholder='Email' size='large' name='userEmail' onChange={handleLoginChange} value={loginDetails.userEmail} prefix={<MailOutlined/>} className={styles.input1}/>
          <Input.Password 
          className={styles.input1}
          size='large'
          prefix={<MdPassword/>}
          placeholder="Password"          
          name='userPassword'
          onChange={handleLoginChange} 
          value={loginDetails.userPassword}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <button onClick={navgot} className={styles.button1}>Forgot Password?</button><br/>
          <Checkbox onChange={onChange} className={styles.check1}>Remember Me</Checkbox><br/>
          <Button className={styles.button } onClick={handleLogin} icon={<LoginOutlined size={30}/>}>Sign In</Button>
          <div className='mt-7 h-card shadow-lg rounded-lg bg-white w-button ml-element'>
            <span className='text-grey text-l font-roboto'>Don't have an account?</span>
            <button onClick={()=>setIsSignup(true)} className={styles.button2}>Sign Up</button>
          </div>
          {
                isLoginFailed && (
                  <div className='text-dark-blue font-roboto mt-4 font-base'>Invalid Credentials</div>
                )
              }
          </Col>

      }
      </Card>
    </main>
    </Col>
  )
  
}

export default Login;