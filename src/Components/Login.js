import React, {useState, useEffect} from "react";

import axios from "axios";


const Login = ()=>{
    let [token, setToken]=useState("");
    let [username, setUsername]=useState("");
    let [password, setPassword]=useState("");

    const loginSubmit =()=>{

        var obj = {U_username: username, U_password: password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
            window.location.reload(false);
            

        }).catch(err=>{
            console.log(err);
        });

    }
    return(
        <div>
            <form>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            </form>
                <button onClick={loginSubmit}>Login</button>
        </div>
        
    )


}
export default Login;