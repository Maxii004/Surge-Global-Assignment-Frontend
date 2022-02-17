import {useState} from "react";
import axios from "axios";
// import Joi from "joi-browser";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import '../CSS/Pages.css';


const Update = () => {

    const [fullName, setfullName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const token = localStorage.getItem("token");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            axios.put(("http://localhost:3900/api/user/update/"+id),{
                fullName: fullName,
                password: password
            },{
                headers: { "X-auth-token": token }
            })
            .then(
                (response) => {
                    console.log(response);
                    navigate(`/dashboard/${id}`);
                    window.location.reload();
                },
                (error) => {
                    console.log(error.response.data);
                    let errorMessage = error.response.data;
                    toast.error(errorMessage);
                }
            )
            
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <div className = "pages">
            <div className = "container">
                <div className = "formstyle">
                <h1>Update Profile</h1>
                <form onSubmit = {handleSubmit}>
                    <input
                    type = "text"
                    required
                    placeholder = "New Full Name"
                    value = {fullName}
                    onChange = {e => setfullName(e.target.value)}
                    />    
                        
                    <input
                    type = "password"
                    required
                    placeholder = "New Password"
                    value = {password}
                    onChange = {e => setPassword(e.target.value)}
                    />

                    <button>Submit</button>
                </form>
            </div>
      </div>
      
    </div>
     );
}
 
export default Update;