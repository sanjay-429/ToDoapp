
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from "./Welcome";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{useState} from "react";
export const CredentialsContext=React.createContext();


function App() {
  const credentialsState=useState(null);
  return (
    <div className="App">
        < CredentialsContext.Provider value={credentialsState}>
       <BrowserRouter>
       <Switch>
         <Route exact path="/" > <Welcome/></Route>
           <Route exact path="/register" ><Register/></Route>
           <Route exact path="/Login"><Login/></Route>
           <Route exact path="/todo"><TodoList/></Route>
          
       </Switch>
       </BrowserRouter>
       </CredentialsContext.Provider>
   
    </div>
  );
}

export default App;
