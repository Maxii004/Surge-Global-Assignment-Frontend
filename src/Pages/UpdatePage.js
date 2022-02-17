import {useState} from "react";
import axios from "axios";
// import Joi from "joi-browser";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import '../CSS/Pages.css';


const Update = () => {

    const {id} = useParams();
    const token = localStorage.getItem("token");

    return ( 
        <div className = "pages">
            <div className = "container">
                <div className = "forms">
                <h1>Update Profile</h1>
                <form>
                    <Link to={`/updatefullname/${id}`}>
                        <button>Update Full Name</button>
                    </Link>
                    
                    <Link to={`/updatepassword/${id}`}>
                        <button>Update Password</button>
                    </Link>
                </form>
            </div>
      </div>
      
    </div>
     );
}
 
export default Update;