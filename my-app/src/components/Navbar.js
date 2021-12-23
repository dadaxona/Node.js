import { Link } from 'react-router-dom';

export default function Navbor(){
    return (
     <div>
        <h1>Hello Navbor</h1>
        <hr />
        <Link to="login">Login</Link>
        <Link to="registr">Registr</Link>
        <Link to="index">Index</Link>
        <Link to="user">User</Link>
        <Link to="postapp">Postapp</Link>
     </div>
    
    );
}