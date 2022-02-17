import {useState} from "react";
import axios from "axios";
// import Joi from "joi-browser";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import '../CSS/Pages.css';

const UpdatePassword = () => {

    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const token = localStorage.getItem("token");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            axios.put(("http://localhost:3900/api/user/updatepassword/"+id),{
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
                <div className = "forms">
                <h1>Update Full Name</h1>
                <form onSubmit = {handleSubmit}>
                    <input
                    type = "text"
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
 
export default UpdatePassword;