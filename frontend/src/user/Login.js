import React, { useState, useEffect } from 'react'
import { StateContext } from '../context'
import { useContext } from 'react'
import { useResource } from 'react-request-hook'

export default function Login() {
    const [ username, setUsername ] = useState('')
    const {dispatch} = useContext(StateContext);
    const [ loginFailed, setLoginFailed ] = useState(false)
    const [ password, setPassword ] = useState('')

    function handleUsername (evt) { setUsername(evt.target.value) }
    function handlePassword (evt) { setPassword(evt.target.value)}

    const [user, login] = useResource((username, password) => ({
        url: "auth/login",
        method: "post",
        data: { username, password },
        }));
    
    useEffect(() => {
        if (user && user.isLoading === false && (user.data || user.error)) {
        if (user.error) {
            setLoginFailed(true);
        } else {
        setLoginFailed(false);
        dispatch({
        type: "LOGIN",
        username: user.data.username    ,
        access_token: user.data.access_token,
        });
        }
        }
        }, [user]);
        

    //{loginFailed && <span style={{ color: "red"}}>Invalid username or password</span>}
    return (
        <div>
        
        <form onSubmit={e => { e.preventDefault(); 
            //dispatch({type: "LOGIN", username}) 
            login(username,password);
            }}>
        <label htmlFor="login-username">Username:</label>
        <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
        <label htmlFor="login-password">Password:</label>
        <input type="password" value={password} onChange={handlePassword} name="login-password" id="login-password" />
        <input type="submit" value="Login" disabled={username.length === 0} />
        </form>
        </div>
    )
}
    