import "../CSS/Home.css";
import {Link} from 'react-router-dom';


const Home = () => {
    return ( 
        
        <div className="home">
            <h1>Welcome!</h1>
            <pre>
                {`I'm Mineth Perera and I'm a 3rd year software engineering undergraduate at General Sir John Kotelawela Defence University.`}<br/>
                {`Here I have created the requested project using Node.js and React JS frameworks and MongoDB as the database`}<br/>
                {`I invite you to review my work done to create this project`}<br/>
                {`Please choose one of the options below to continue and the navigaiton bar saying "Surge Global Assignment"`}<br/>{`as the home button when needed.`}
            </pre>
            <div className="buttons">
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
                <Link to= '/login'>
                    <button>Login</button>
                </Link>

            </div>
        </div>
     );
}
 
export default Home;