import "../CSS/Pages.css";

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Dashboard = () => {

    const {id}=useParams();
    const [user,setUser]=useState(null);

    const tokenKey="token";
    const isLoggedIn="isLoggedIn";
    const userId="userId";

    
    function logOut(){
        localStorage.removeItem(tokenKey);
        localStorage.removeItem(isLoggedIn);
        localStorage.removeItem(userId);
        window.location="/";
    }

    function updateButton(){
        window.location="/update/"+id;
    }

    useEffect(() =>{
        fetch('http://localhost:3900/api/user/'+id,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(async response =>{
            try{
                const data=await response.json();
                console.log('response data ',data);
                return data;
            }catch(error){
                console.log("Error Occured");
                console.error(error);
            }
        })
        .then(data => {
            setUser(data);
            console.log(data)
          })
        .catch((err)=>{
            console.log(err);
        })
        
    },[]);

    return ( 

        <div className="pages">
            <div className="container">
                <div className="forms">
                    <h1>Dashboard</h1><br/>
                        <h2>Full Name:</h2> <h3>{user && user.fullName}</h3> 
                        <h2>Username: </h2> <h3>{user && user.userName}</h3>
                        <h2>Email: </h2> <h3>{user && user.email}</h3><br/>
                </div>
                
            </div>
            <button className="updateLogout" onClick={updateButton}>Update</button>
            <button className="updateLogout" onClick={logOut}>Logout</button>     
        </div>
     );
}
 
export default Dashboard;