import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router';
import {CredentialsContext} from '../App'


function Register() {
    //  signup (email, password, confirm password, phone no)
    const [email, setEmail]=useState("");
    const [pass, setPass]=useState("");
    const [cnfpas, setCnfpass]=useState("");
    const [phone, setPhone]=useState("");
    const [message, setMessage]=useState("");
    const [,setCredentials]=useContext(CredentialsContext)
    const history=useHistory();
      
    const Register=(e)=>{
        e.preventDefault();
        if(pass==cnfpas){
        fetch('http://localhost:4000/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body: JSON.stringify({
                email,
                pass,
                phone
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
    else
      {
          setMessage("Both password didn't match please check")
      }
}

    

    return (
        <div className="model">
        <div className="model_container">
       
             <form onSubmit={Register}>
                 <h2 style={{color:"rgb(189, 192, 211)"}}>Signup</h2>
                
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

                     <div className="formblock">
                     <label htmlFor="cnfpass">Confirm password</label>
                    <input id="cnfpass "
                     className="form" 
                     type="password" 
                     value={cnfpas}
                     placeholder="confirm password"
                     onChange={(e)=>setCnfpass(e.target.value)}/>
                     </div>

                     <br/>
                     <div className="formblock"> 
                     <label htmlFor="phoneno">Phone no</label>
                     <input id="phoneno"
                     className="form" 
                     value={phone}
                     type="number" 
                     placeholder="phone no" 
                     onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                     <br/>
                     <br/>
                     <div className="formblock">
                          <h5>{message}</h5>
                         <button  className="btn btn-smart"  type="submit">Signup</button>
                     </div>
                     
                  

                 
             </form>
        </div>
        </div>
    
    )
}

export default Register;
