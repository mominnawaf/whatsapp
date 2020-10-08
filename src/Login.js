import React from 'react'
import {Button} from "@material-ui/core"
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png" alt="whatsapp"/>
            <div className="login__text">
                <h1>Sign in to Whatsapp</h1>
            </div>
            <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
