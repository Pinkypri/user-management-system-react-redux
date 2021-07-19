import React,{useState} from 'react';
import Navbar from '../Components/Navbar';
import "./Home.css"
import {useDispatch}from "react-redux";
import {adduser} from "../Store/actions/user"


const Home = () => {
    const [user, setuser] = useState({
        name:"",
        email:"",
        contact:"",
        address:"",
    })

     const dispatch = useDispatch();
    
    const handAdd=(event)=>{
        event.preventDefault();
        if(user.name===""||user.email==="" || user.contact==="" || user.address===""){
            alert("Please Fill all details");
            return;
        }
        dispatch(adduser(user));
        setuser({
            name:"",
            email:"",
            contact:"",
            address:"",
        });
    }
    const handChange=(event)=>{
     const {name, value}=event.target;
     setuser((prevState)=>{
         return{
             ...prevState,
             [name]:value
         };
     })
    }
  
    return (
        <div>
            <Navbar/>
            <br/>
            <br/>
           <h1>Enter User Information</h1> 
           <form>
           
               <input type="text"name="name" value={user.name} placeholder="Enter Your Name"onChange={handChange}/><br/>
              
               <input type="email" name="email" value={user.email} placeholder="Enter Your Email" onChange={handChange}/><br/>
            
               <input type="Number" name="contact"value={user.contact} placeholder="Enter Your PhoneNumber" onChange={handChange}/><br/>
             
               <textarea  name="address" value={user.address}placeholder="Enter Your Address"onChange={handChange}></textarea><br/>
               <button type="submit" onClick={handAdd}>Submit</button>
           </form>
        </div>
    )
}

export default Home;

