import { useEffect, useState } from "react";
import { Redirect, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

export default function Registr(){

    const [name, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const notify = () => {
         
            fetch("/userspost", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            }).then(res => res.json())
                .then(data => {
                    if(data.error){                       
                        toast("Error");
                    } else {
                        toast("Success fully");
                        navigate("/login");
                    }
                })          
     
    } 

    return (
        
        <div className="container">
        <h1>Hello Registr</h1>
        <hr />
        <main class="form-signin">
        <form onSubmit={notify()}>
    
        <div className="form-floating mt-5">
            <input 
            type="text" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Name"
            value={name}
            onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="floatingPassword">Name</label>
            </div>

            <div className="form-floating mt-5">
            <input 
            type="email" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mt-5">
            <input 
            type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
            </div>    

        
            <button className="w-100 btn btn-lg btn-primary mt-5" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
        </main>
   </div>
    );
}