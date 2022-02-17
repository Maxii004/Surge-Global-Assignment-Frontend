import {useState} from "react";
import axios from "axios";
// import Joi from "joi-browser";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import '../CSS/Pages.css';


const Signup = () => {
  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useNavigate ();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    try {
      axios.post("http://localhost:3900/api/user/signup/", {
        fullName: fullName,
        userName: userName,
        email: email,
        password: password
        // method:'POST',
        // headers:{"Content-Type":"application/json"},
        // body:JSON.stringify(result)
      })
      .then(
        (response) => {
          console.log(response);
          window.location="/login";
        },
        (error) => {
          console.log(error.response.data);
          let errorMessage=error.response.data;
          toast.error(errorMessage);
        }
      )
      .catch((err) => {
        console.log(err);
      });
    } catch (ex) {
      if(ex.response.status === 400){
        return ex.response.status();
      }
    }
    
  };

  return (
    <div className ="pages">
      <div className = "container">
        <div className = "formstyle">
          <h1>Register</h1>
          <form onSubmit = {handleSubmit}>

            <input
              type = "text"
              required
              placeholder ="Full Name"
              value = {fullName}
              onChange = {e => setfullName(e.target.value)}
            />

            <input
              type = "email"
              required
              placeholder = "Email"
              value = {email}
              onChange = {e => setEmail(e.target.value)}
            />
            
            <input
              type = "text"
              required
              placeholder = "Username"
              value = {userName}
              onChange = {e => setuserName(e.target.value)}
            />          
            
            <input
              type = "password"
              required
              placeholder = "Password"
              value = {password}
              onChange = {e => setPassword(e.target.value)}
            />

            <button>Submit</button>
          
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Signup;