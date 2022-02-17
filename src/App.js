import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from './Pages/Home';
import Signup from './Pages/SignUp';
import UserLogin from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Update from './Pages/UpdatePage';
import UpdateFullName from './Pages/UpdateFullName';
import UpdatePassword from './Pages/UpdatePassword';
import Navbar from "./Components/Navbar";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

    <Router>
      <Navbar/>
      <ToastContainer/>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<Signup />}/>
          <Route exact path='/login' element={<UserLogin />} />
          <Route exact path='/dashboard/:id' element={<Dashboard />} />
          <Route exact path='/update/:id' element={<Update />} />
          <Route exact path='/updatefullname/:id' element={<UpdateFullName />} />
          <Route exact path='/updatepassword/:id' element={<UpdatePassword />}/>     
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;