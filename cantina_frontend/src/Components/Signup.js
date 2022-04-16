import React from 'react'
import {Link} from 'react-router-dom';
import {SignUpContainer, SignUpBox, Input, Inputs, Button, ButtonLink} from '../Styles/Signup.style'

function Signup() {
    return (
        
        <SignUpContainer style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/4/49/Universitatea_Politehnica_Timisoara_-_Rectorat.jpg)`}}>
            <SignUpBox>
                <h2>Sign up</h2>
            <form >
                <Inputs>
                    <label htmlFor="signup-name">Full Name</label>
                    <Input type="text" placeholder="Full Name" id="signup-name" required/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-email">Email Address</label>
                    <Input type="text" placeholder="name@email.com" id="signup-email" required/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-password">Password</label>
                    <Input type="password" placeholder="Password" id="signup-password" required/>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-password">Confirm Password</label>
                    <Input type="password" placeholder="Confirm Password" id="signup-confirm" required/>
                </Inputs>
                <Button>   
                        <ButtonLink>Sign Up</ButtonLink>
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