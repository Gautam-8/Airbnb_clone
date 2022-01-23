import { useNavigate } from "react-router-dom";
import "../css/SignUp.css"
export const SignUp=()=>{
    const navigate=useNavigate();
     function Sign(e){//https://github.com/masai-school/api-mocker.wiki.git
        e.preventDefault();
        let form=document.getElementById("signup-form");
        let user_data={
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            username: form.username.value,
            mobile: form.mobile.value,
            description: form.description.value,
        };
        user_data=JSON.stringify(user_data);
        console.log(user_data);
        fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
            method:"POST",
            body:user_data,

            headers:{
                "Content-Type": "application/json",
            },
        })
        .then((res)=>
        {
            return res.json()
        })
        .then((res)=>
        {
            console.log(res);
            if(res.error==false){
                navigate("/login");
            }else{
                alert("User Already exist")
            }

        })
        .catch((err)=>{
            console.log(err);
        })
        }
    return (<div>
        <br />
        <br /><br /><br />
        <div id="signup">
        
    <form onSubmit={(e)=>{
        Sign(e);
    }} id="signup-form">
       <h2>&nbsp;&nbsp;<span onClick={()=>{
               navigate(-1);
           }} > &times;</span></h2>

 <input type="text" id="name" placeholder="Name"></input>
       <br />
   <input type="email" id="email" placeholder="Email"></input>
      <br />
  <input type="password" id="password" placeholder="Password"></input>
       <br />
   <input type="text" id="username" placeholder="Username"></input>
      <br />
 <input type="number" id="mobile" placeholder="Mobile"></input>
         <br />
 <input type="text" id="description" placeholder="Description"></input>
      <br />
        <input id="type-submit" type="submit"></input>
    </form>
</div>
    </div>)
}