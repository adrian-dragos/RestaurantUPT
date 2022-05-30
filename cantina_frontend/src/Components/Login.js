import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {LogInContainer, LogInBox, Input, Inputs, Button, ButtonLink} from '../Styles/Login.style'
import {useNavigate} from 'react-router'

function Login() {
    const history = useNavigate();
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const [user,setUser] = useState({id: 0,
    email: "",
    name: "",
    isAdmin: false,
    token: ""});

    async function LogIn(){
        console.log("s a apelat login");
        const url = 'https://rgrestaurantapi.azurewebsites.net/api/Users/authenticate'
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginForm),
          })
          .then(response => response.json())
          .then(currentUser => {setUser(currentUser); localStorage.setItem("user", JSON.stringify({value: currentUser}));})
          .catch(error => console.log(error));
    }

    return (
        <LogInContainer style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/49/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg)`}}>
            <LogInBox>
                <h2>Log in</h2>
                    <Inputs>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="email" placeholder="name@email.com" id="login-email" required onChange={e => setLoginForm({...loginForm, email: e.target.value})}/>
                    </Inputs>
                    <Inputs>
                        <label htmlFor="login-password">Password</label>
                        <Input type="password" placeholder="Password" id="login-password" required onChange={e => setLoginForm({...loginForm, password: e.target.value})}/>
                    </Inputs>
                    <Button>
                        <ButtonLink onClick={async () => {
                            await LogIn(); 
                            setLoginForm({email: "", password: ""}); 
                            history("/");
                        }}>Log in</ButtonLink>
                    </Button>
                <span>Don't have an account?
                    <Link to="/signup">Sign Up</Link>
                </span>
            </LogInBox>
        </LogInContainer>
    )
}
export default Login