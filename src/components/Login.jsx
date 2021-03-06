import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../css/Login.css"
import { logIn } from "../reducers/reducer/action";
export const Login=()=>{
    let dispatch = useDispatch();
    let [admin,setAdmin]=useState(false);
    let navigate=useNavigate();
    function logi(e){
        e.preventDefault();
        let form=document.getElementById("login-form");
        let user_data={
            password: form.pass.value,
            username: form.user.value,
        };
        let data_to_send=JSON.stringify(user_data);
        console.log("data_to_send",data_to_send);
        fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
            method:'POST',
            body:data_to_send,
            headers:{
                    "Content-Type": "application/json",
                }
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            fetchmyData(user_data.username,res.token);
        })
        .catch((err)=>{
            alert("Please input correct credentials")
          console.log(err);
        });
    }
    
    function fetchmyData(username,token){
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
        console.log(res);
        if(localStorage.getItem("token")==null){
            localStorage.setItem("token",JSON.stringify());
        }
        let currentusername=res.username;
        console.log(currentusername);
        localStorage.setItem("token",JSON.stringify(currentusername));
        dispatch(logIn())
        navigate('/Airbnb_clone')
    })
    .catch((e)=>{
        console.log(e);
    });
    }
    return (<div>
        <br />
        <br />
        <br />
        <br />
        <div id="login">
      
       <form onSubmit={(e)=>{
           logi(e);
       }} id="login-form">
           <h2>&nbsp;&nbsp;<span onClick={()=>{
               navigate(-1);
           }} > &times;</span></h2>
           <br />
           
          <label htmlFor="">Username </label>
          <br /> <input autoComplete="off" type="text" id="user" placeholder="Username"></input>
           <br />
           <br />
           <label htmlFor="">Password  &nbsp;</label> 
           <br />
           <input autoComplete="off" type="password" id="pass" placeholder="Password"></input>
           <br />
           <br />
   
           <input id="type-submit" type="submit"></input>
       </form>
   </div>
        </div>)
}


/*
 * {"name":"Narendra Kumar Panchal","email":"rapanchal020@gmail.com",
 * "password":"12345","username":"narendrak","mobile":"7424800792","description":""}
 */