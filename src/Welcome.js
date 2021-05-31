import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import {CredentialsContext } from "./App";

function Welcome() {
  const [credentials, setCredentials] = useContext(CredentialsContext);
   const logout=()=>{
    setCredentials(null);
   }
    return (
      // navbar
       <div className="main">
        <div className="parent">
         
               <div className="first"> <h2>ToDo List</h2> </div>
          <div className="second">
          {!credentials && <Link to="/register"><span id="sign" >Signup</span></Link>}
           {!credentials &&  <Link to="/Login"><span id="login" >Login</span> </Link>}
           {credentials && <button onClick={logout}>Logout</button>}
           </div>
           </div>
    {/* background image */}
           <div className="prtcpnt">
            <img src="./img/todopic.jpg" alt="img not load"/> 
              {/* main todo list */}
           {!credentials &&  <div className="gets" ><Link to='/login' ><span id="strt"> Gets started</span> </Link> </div>}
         {credentials &&  <div className="btn" ><Link to='/todo' ><span id="strt">User_type</span></Link> </div> }
         {credentials &&  <div className="bt" ><Link to='/admin' ><span id="admin">Admit_type</span></Link> </div> }
          <div className="wlcm"> <h1 id="cred">Welcome</h1>
          <div style={{ height:"200px",display:"flex",justifyContent:"center"}}>
            <h1 style={{color:"white",fontSize:"20px"}}> {credentials &&credentials.email}</h1>
            </div> </div>
           </div>
           
           
        </div>
        
    )
}

export default Welcome

