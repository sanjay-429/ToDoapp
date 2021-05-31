// import React, { useState } from 'react'

// function Login() {
//     const [email, setEmail]=useState("");
//     const [password, setPassword]=useState("");
//     const handleInput=(e)=>{
//         setEmail(e.target.value);
//     }
//     const handlepass=(e)=>{
//       setPassword(e.target.value);
//     }
//     const formtoggle=()=>{}
//     return (
//         <div className="model">
//         <div className="model_container">
//             <form>
//              <div className="formblock">
//                     <input
//                       type="email"
//                       name="email"
//                       className="form"
//                       placeholder="Email"
//                       onChange={handleInput}
               
//                       required
//                     />
//                   </div>
//                   <div className="formblock">
//                     <input
//                       type="password"
//                       name="password"
//                       className="form"
//                       placeholder="Current password"
//                       onChange={handlepass}
                     
//                     />
//                   </div>
//                   <div className="model_group">
//                     <input
//                       type="submit"
//                       value="Login"
//                       className="btn btn-smart"
//                     />
//                   </div>
//                   <div className="model_group">
//                     <span >Create a new account?</span>
//                   </div>
//                 </form>
//               </div>
//               </div>
     
//     )
// }

// export default Login
import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router';
import {CredentialsContext} from '../App'


function Login() {
    //  signup (email, password, confirm password, phone no)
    const [email, setEmail]=useState("");
    const [pass, setPass]=useState("");
    const [message, setMessage]=useState("");
    const [,setCredentials]=useContext(CredentialsContext)
    const history=useHistory();
      
    const Login=(e)=>{
        e.preventDefault();
   
        fetch('http://localhost:4000/Login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body: JSON.stringify({
                email,
                pass,
               
            }),
        })
        .then(()=>{
            setCredentials({
                email,
                pass
            })
            history.push("/");
        })
       
    
   
}

    

    return (
        <div className="model">
        <div className="model_container">
       
             <form onSubmit={Login}>
                 <h2 style={{color:"rgb(189, 192, 211)"}}>Login</h2>
                
                     <div className="formblock">
                    <label htmlFor="mail">Email</label>
                     <input id="mail " 
                     className="form" 
                     type="email" 
                     placeholder="email"
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}/>
                     </div>
                     <br/>

                     <div className="formblock">
                     <label htmlFor="pass">password</label>
                     <input 
                     id="pass " 
                     className="form" 
                     type="password" 
                     placeholder="password"
                     value={pass}
                     onChange={(e)=>setPass(e.target.value)}/>
                     </div>
                     <br/>

                  

                     <br/>
                    
                     <br/>
                     <br/>
                     <div className="formblock">
                          <h5>{message}</h5>
                         <button  className="btn btn-smart"  type="submit">Signin</button>
                     </div>
                     
                  

                 
             </form>
        </div>
        </div>
    
    )
}

export default Login;

