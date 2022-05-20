import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {LogInContainer, LogInBox, Input, Inputs, Button, ButtonLink} from '../Styles/Login.style'

function Login() {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    return (
        <LogInContainer style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/49/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg)`}}>
            <LogInBox>
                <h2>Log in</h2>
                <form>
                    <Inputs>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="email" placeholder="name@email.com" id="login-email" required onChange={e => setLoginForm({...loginForm, email: e.target.value})}/>
                    </Inputs>
                    <Inputs>
                        <label htmlFor="login-password">Password</label>
                        <Input type="password" placeholder="Password" id="login-password" required onChange={e => setLoginForm({...loginForm, password: e.target.value})}/>
                    </Inputs>
                    <Button>
                        <ButtonLink>Log in</ButtonLink>
                    </Button>
                </form>
                <span>Don't have an account?
                    <Link to="/signup">Sign Up</Link>
                </span>
            </LogInBox>
        </LogInContainer>
    )
}
export default Login