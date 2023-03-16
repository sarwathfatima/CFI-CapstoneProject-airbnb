import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function RegisterPage(){
    const [userData, setUserData]= useState({
        fullname: "",
        email:"",
        username:"",
        password:"",
        password2:"",
         })
         let {fullname, email,username, password, password2}= userData;
         const onChangeHandler=(e)=>{
          setUserData({
            ...userData,
            [e.target.name] : e.target.value
          })
         }
         
         const onSubmitHandler = async(e)=>{
        try{
        e.preventDefault();
        let {data}= await axios.post("/api/user/register", userData);
        console.log(data);
        alert('Registeration successful')
        }
        catch(error){
        console.log(error);
        alert('Registeration failed')
        }
         }
    return (
        <>
        <center>
            <div className="mt-40 font-bold">
            <h1 className="text-4xl mb-3">Register</h1>
            <form onSubmit={onSubmitHandler} className="max-w-md mx-auto ">
            <input type="text" className="shadow shadow-purple-500 rounded-full p-2 mt-2 w-full"  placeholder=" Enter your Full Name" name="fullname" onChange={onChangeHandler} value={fullname}  required />
        <input type="email" className="shadow shadow-purple-500 rounded-full p-2 mt-2 w-full" placeholder="Enter your Email " name="email" onChange={onChangeHandler} value={email}  required />
        <input type="text" className="shadow shadow-purple-500 rounded-full p-2 mt-2 w-full" placeholder="Enter your Username" name="username" onChange={onChangeHandler} value={username}  required />
        <input type="password" className="shadow shadow-purple-500 rounded-full p-2 mt-2 w-full" placeholder= "Enter Password" name ="password" onChange={onChangeHandler} value={password}  required/>
        <input type="password" className="shadow shadow-purple-500 rounded-full p-2 mt-2 w-full" placeholder= "Confirm your Password" name="password2" onChange={onChangeHandler} value={password2}  required />
            <div className="input-box button">
            <input type="submit"  className="bg-gray-900 p-2 mt-2 w-full text-white rounded-2xl hover-shadow-purple-700" value="Register"/>
            </div>
            <div className="text-center py-2 text-gray-500" type="submit">
            Already a member?
                    <Link to={'/login'} className="underline text-gray-900">Login here</Link>
                </div>
            </form>
            </div>
        </center>
        </>
    )
}
export default RegisterPage