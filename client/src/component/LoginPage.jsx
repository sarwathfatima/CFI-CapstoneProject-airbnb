import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
function LoginPage(){
  const [userData, setUserData]= useState({
    email:"",
    password:"",
     })
     let { email, password}= userData;
     const onChangeHandler=(e)=>{
      setUserData({
        ...userData,
        [e.target.name] : e.target.value
      })
     }
     
     const onSubmitHandler = async(e)=>{
    try{
    e.preventDefault();
    let {data}= await axios.post("/api/user/login", userData);
    console.log(data);
     alert('Login successful')
  return <Navigate to={'/'} />
 
    }
    catch(error){
    console.log(error);
    
    }
     }
  return(
  
<center>
<div className="mt-40 font-bold">
            <h1 className="text-4xl mb-3">Login</h1>
            <form onSubmit={onSubmitHandler} className="max-w-md mx-auto p-5">
            <div >
            <input type="email"  className="shadow shadow-purple-500 rounded-full p-2 mt-2 w-full" placeholder="Enter your email" name="email" onChange={onChangeHandler} value={email} required/>
            </div>
            <div className="input-box">
            <input type="password"  className="shadow shadow-purple-500 rounded-full p-2 mt-4 w-full" placeholder="Enter your password" name="password" onChange={onChangeHandler} value={password} required/>
            </div>
            <div className="input-box button">
            <input type="submit"  className="bg-gray-900 p-2 mt-4 w-full text-white rounded-2xl hover-shadow-purple-700" value="Login"/>
            </div>
            <div className="text-center py-2 text-gray-500" type="submit">
                    Don't have an account yet?
                    <Link to={'/register'} className= "underline text-gray-900">Register Now</Link>
                </div>
            </form>
            </div>
    </center>
);
}
export default LoginPage