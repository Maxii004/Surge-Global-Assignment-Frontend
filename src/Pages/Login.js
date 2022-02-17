import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../CSS/Pages.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from "react-toastify";



const UserLogin = () => {

    const tokenKey = "token";
    const userLocalId = "userId";
    const isLoggedIn = "isLoggedIn";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data] = useState(""); 
    const history = useNavigate();

    setJwt(getJwt());

    function setJwt(jwt){
        axios.defaults.headers.common['x-auth-token']=jwt;
    }

    function getJwt(){
        return localStorage.getItem(tokenKey);
    }

    function getCurrentUser(){
        try{
            const jwt = localStorage.getItem(tokenKey);
            return jwtDecode(jwt);
        }

        catch(ex){
            return null;
        }
    }


    const  handleSubmit = (e) =>{
        e.preventDefault();

        try {
            axios.post("http://localhost:3900/api/user/login/",{
                email: email,
                password: password
            })
            .then(
                (response) => {
                    console.log(response);
                    // console.log(response.headers);
                    let response1 = response.headers;
                    let response2 = Object.values(response1);
                    let response3 = response2[2];

                    let data1 = response.data;
                    let data2 = Object.values(data1);
                    let data3 = data2[2];
                    
                    let userId = data2[0];
                    // console.log(response3);
                    // console.log(data3);
                    // console.log(userId);

                    //jwtPrivateKey
                    localStorage.setItem(tokenKey,response3);
                    localStorage.setItem(isLoggedIn,true);
                    localStorage.setItem(userLocalId,userId);
                    // history.push('/');
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                    let errorMessage = error.response.data;
                    toast.error(errorMessage);
                }
            )
            .catch((err) => {
                console.log(err);
            })
        } catch (ex) {
            console.log(ex.response);
        }

    }

    const userId = localStorage.getItem(userLocalId);
    if(getCurrentUser()){     
        return <Navigate to = {`/dashboard/${userId}`} />
    }
    return (
        <div className = "pages">
            <div className = "container">
                <div className = "formstyle">
                <h1>Login</h1>
                <form onSubmit = {handleSubmit}>
                    
                    <input
                    type = "email"
                    required
                    placeholder = "Email"
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
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

export default UserLogin;