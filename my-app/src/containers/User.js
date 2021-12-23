import React, { useState, useEffect } from "react";

function User(){
    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch("/users").then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setUser(jsonRes.results))
    })

    return (
        <div className="container">
            <h1>User fail malumotlari</h1>
           <div className="ddiv">
           <table>
            
          
            {user.map(user => (   
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td><a className="btn btn-success">Edit</a></td>
                        <td><a className="btn btn-danger">Delete</a></td>
                    </tr>
                    ))}
            
        </table>
           </div>


        </div>
        
    );
}
export default User;