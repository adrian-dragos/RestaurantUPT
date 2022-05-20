import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {SignUpContainer, SignUpBox, Input, Inputs, Button, ButtonLink} from '../Styles/Signup.style'

function Signup() {
    var password = document.getElementById("signup-password"), confirm_password = document.getElementById("signup-confirm");
    function validatePassword(){
        if(signupForm.password != signupForm.confirm_password) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    const [signupForm, setSignupForm] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    return (
        
        <SignUpContainer style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/49/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg)`}}>
            <SignUpBox>
                <h2>Sign up</h2>
            <form >
                <Inputs>
                    <label htmlFor="signup-name">Full Name</label>
                    <Input type="text" placeholder="Full Name" id="signup-name" required minLength={6} onChange={e => setSignupForm({...signupForm, username: e.target.value})}/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-email">Email Address</label>
                    <Input type="email" placeholder="name@email.com" id="signup-email" required onChange={e => setSignupForm({...signupForm, email: e.target.value})}/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-password">Password</label>
                    <Input type="password" placeholder="Password" id="signup-password" required minLength={6} onChange={e => setSignupForm({...signupForm, password: e.target.value})}/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-password">Confirm Password</label>
                    <Input type="password" placeholder="Confirm Password" id="signup-confirm" required onChange={e => setSignupForm({...signupForm, confirm_password: e.target.value})}/>
                </Inputs>
                <Button>   
                        <ButtonLink onClick={() => {validatePassword(); console.log(signupForm)}}>Sign Up</ButtonLink>
                </Button>
            </form>
                <span>Already have an account?
                    <Link to="/login">Log In</Link>
                </span>
            </SignUpBox>
        </SignUpContainer>
    )
}

export default Signup