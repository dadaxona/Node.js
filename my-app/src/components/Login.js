import { useEffect, useState } from "react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="container">
        <h1>Login</h1>
        <hr />
        <main className="form-signin">
        <form>

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