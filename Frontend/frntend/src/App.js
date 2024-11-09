import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate=useNavigate()
  const[name,setname]=useState("")
  const[pswd,setpswd]=useState("")
  function handlename(event)
  {
    setname(event.target.value)
  }
  function handlepswd(event)
  {
    setpswd(event.target.value)
  }
  function check()
  {
    const logindetails=axios.post("http://localhost:4000/login",{"username":name,"password":pswd})//it fetch the data from the api & it return promise obj tat will be stored in logindetail
    logindetails.then(function(data)
  {
    console.log(data);
    if(data.data==true)
    {
      console.log("Login success");
      navigate("/success")
      
    }
    else {
      console.log("Login fail"); 
      navigate("/fail")
    }
    
  })
  }
  return (
     <>
    <input value={name} name="username" onChange={handlename} placeholder='username'></input>
    <input value={pswd} name="password" onChange={handlepswd} placeholder='password'></input>
    <button type='submit' onClick={check}>Submit</button>
    </>
   
  );
}

export default App;
